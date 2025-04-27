import express from "express";
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertSubscriberSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = express.Router();
  
  // Contact form submission
  apiRouter.post("/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const contactWithTimestamp = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      
      // In a real app, this would save to a database and possibly send an email
      // For now, just return success
      res.status(200).json({ message: "Message received! Thank you for your submission." });
    } catch (error) {
      res.status(400).json({ message: "Invalid form data", error });
    }
  });
  
  // Newsletter subscription
  apiRouter.post("/subscribe", async (req, res) => {
    try {
      const { email } = insertSubscriberSchema.parse(req.body);
      
      // Add timestamp
      const subscriberData = {
        email,
        createdAt: new Date().toISOString(),
      };
      
      // In a real app, this would save to a database and possibly trigger a welcome email
      // For now, just return success
      res.status(200).json({ message: "Successfully subscribed to the newsletter!" });
    } catch (error) {
      res.status(400).json({ message: "Invalid email address", error });
    }
  });

  app.use("/api", apiRouter);
  
  const httpServer = createServer(app);
  return httpServer;
}
