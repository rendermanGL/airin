import express from "express";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertSubscriberSchema, insertDocumentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = express.Router();
  
  // Contact form submission
  apiRouter.post("/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      const contact = await storage.createContact(contactData);
      
      res.status(200).json({ 
        message: "Message received! Thank you for your submission.",
        contact: { id: contact.id }
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid form data", error });
    }
  });
  
  // Newsletter subscription
  apiRouter.post("/subscribe", async (req, res) => {
    try {
      const subscriberData = insertSubscriberSchema.parse(req.body);
      
      const subscriber = await storage.createSubscriber(subscriberData);
      
      res.status(200).json({ 
        message: "Successfully subscribed to the newsletter!",
        subscriber: { id: subscriber.id }
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid email address", error });
    }
  });

  // Get contacts (admin endpoint)
  apiRouter.get("/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching contacts", error });
    }
  });

  // Get subscribers (admin endpoint)
  apiRouter.get("/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.status(200).json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching subscribers", error });
    }
  });

  // Document endpoints
  apiRouter.post("/documents", async (req, res) => {
    try {
      const documentData = insertDocumentSchema.parse(req.body);
      const document = await storage.createDocument(documentData);
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ message: "Error creating document", error });
    }
  });

  apiRouter.get("/documents", async (req, res) => {
    try {
      const documents = await storage.getDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ message: "Error fetching documents", error });
    }
  });

  apiRouter.get("/documents/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const document = await storage.getDocument(id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ message: "Error fetching document", error });
    }
  });

  // Serve PDF files
  apiRouter.get("/documents/:id/file", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const document = await storage.getDocument(id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      
      const buffer = Buffer.from(document.fileData, 'base64');
      res.setHeader('Content-Type', document.contentType);
      res.setHeader('Content-Disposition', `inline; filename="${document.filename}"`);
      res.send(buffer);
    } catch (error) {
      res.status(500).json({ message: "Error serving document", error });
    }
  });

  app.use("/api", apiRouter);
  
  const httpServer = createServer(app);
  return httpServer;
}
