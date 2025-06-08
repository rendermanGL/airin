import { users, contacts, subscribers, documents, type User, type InsertUser, type Contact, type InsertContact, type Subscriber, type InsertSubscriber, type Document, type InsertDocument } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getContacts(): Promise<Contact[]>;
  getSubscribers(): Promise<Subscriber[]>;
  createDocument(document: InsertDocument): Promise<Document>;
  getDocuments(): Promise<Document[]>;
  getDocument(id: number): Promise<Document | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values({
        ...insertContact,
        createdAt: new Date().toISOString(),
      })
      .returning();
    return contact;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values({
        ...insertSubscriber,
        createdAt: new Date().toISOString(),
      })
      .returning();
    return subscriber;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }
}

export const storage = new DatabaseStorage();
