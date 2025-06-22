import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { documents, contacts } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      const newContact = await db.insert(contacts).values({
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      }).returning();

      res.json({ success: true, contact: newContact[0] });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });

  // Admin authentication
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    
    console.log('Login attempt:', { username, password });
    
    if (username === "admin" && password === "admin12341234!") {
      req.session.adminLoggedIn = true;
      console.log('Login successful, session:', req.session);
      res.json({ success: true });
    } else {
      console.log('Login failed: invalid credentials');
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    req.session.adminLoggedIn = false;
    res.json({ success: true });
  });

  // Get contact messages (admin only)
  app.get("/api/admin/contacts", (req, res) => {
    if (!req.session.adminLoggedIn) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    db.select().from(contacts).orderBy(desc(contacts.createdAt))
      .then(contactMessages => {
        res.json(contactMessages);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: "Failed to fetch contacts" });
      });
  });

  // API routes for documents
  app.get("/api/documents", async (req, res) => {
    try {
      const docs = await db.select().from(documents);
      res.json(docs);
    } catch (error) {
      console.error('Error fetching documents:', error);
      res.status(500).json({ error: "Failed to fetch documents" });
    }
  });

  app.get("/api/documents/:id", async (req, res) => {
    try {
      const document = await db.select()
        .from(documents)
        .where(eq(documents.id, parseInt(req.params.id)))
        .limit(1);

      if (document.length === 0) {
        return res.status(404).json({ error: "Document not found" });
      }

      res.json(document[0]);
    } catch (error) {
      console.error('Error fetching document:', error);
      res.status(500).json({ error: "Failed to fetch document" });
    }
  });

  app.get("/api/documents/:id/file", async (req, res) => {
    try {
      const document = await db.select()
        .from(documents)
        .where(eq(documents.id, parseInt(req.params.id)))
        .limit(1);

      if (document.length === 0) {
        return res.status(404).json({ error: "Document not found" });
      }

      const doc = document[0];
      res.setHeader('Content-Type', doc.contentType);
      res.setHeader('Content-Disposition', `attachment; filename="${doc.filename}"`);
      res.send(Buffer.from(doc.fileData, 'base64'));
    } catch (error) {
      console.error('Error downloading document:', error);
      res.status(500).json({ error: "Failed to download document" });
    }
  });

  // Serve static assets from attached_assets
  app.use('/attached_assets', (req, res, next) => {
    const filePath = path.join(process.cwd(), 'attached_assets', req.path);
    
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).json({ error: "File not found" });
    }
  });

  return createServer(app);
}