import type { Express } from "express";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { documents } from "@shared/schema";
import path from "path";
import fs from "fs";

export function registerRoutes(app: Express) {
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
      res.send(Buffer.from(doc.content));
    } catch (error) {
      console.error('Error downloading document:', error);
      res.status(500).json({ error: "Failed to download document" });
    }
  });

  // Serve award submission PDFs
  app.get("/api/awards/:filename", (req, res) => {
    try {
      const filename = req.params.filename;
      const filePath = path.join(process.cwd(), 'attached_assets', filename);

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
      }

      const fileExtension = path.extname(filename).toLowerCase();
      if (fileExtension !== '.pdf') {
        return res.status(400).json({ error: "Only PDF files are allowed" });
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${filename}"`);

      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error('Error serving award PDF:', error);
      res.status(500).json({ error: "Failed to serve PDF" });
    }
  });
}