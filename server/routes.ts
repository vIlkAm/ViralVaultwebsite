import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertApplicationSchema, insertTeamSchema, insertCampaignSchema, insertClipSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Application routes
  app.post('/api/applications', async (req, res) => {
    try {
      const validatedData = insertApplicationSchema.parse(req.body);
      const application = await storage.createApplication(validatedData);
      res.status(201).json(application);
    } catch (error) {
      console.error("Error creating application:", error);
      res.status(400).json({ message: "Failed to create application" });
    }
  });

  app.get('/api/applications', isAuthenticated, async (req: any, res) => {
    try {
      const user = await storage.getUser(req.user.claims.sub);
      if (user?.role !== 'admin' && user?.role !== 'manager') {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      const applications = await storage.getApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  // Team routes
  app.post('/api/teams', isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertTeamSchema.parse({
        ...req.body,
        clientId: req.user.claims.sub
      });
      const team = await storage.createTeam(validatedData);
      res.status(201).json(team);
    } catch (error) {
      console.error("Error creating team:", error);
      res.status(400).json({ message: "Failed to create team" });
    }
  });

  app.get('/api/teams', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      let teams;
      if (user?.role === 'client') {
        teams = await storage.getTeamsByClient(userId);
      } else if (user?.role === 'manager') {
        teams = await storage.getTeamsByManager(userId);
      } else {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      res.json(teams);
    } catch (error) {
      console.error("Error fetching teams:", error);
      res.status(500).json({ message: "Failed to fetch teams" });
    }
  });

  // Campaign routes
  app.post('/api/campaigns', isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertCampaignSchema.parse({
        ...req.body,
        clientId: req.user.claims.sub
      });
      const campaign = await storage.createCampaign(validatedData);
      res.status(201).json(campaign);
    } catch (error) {
      console.error("Error creating campaign:", error);
      res.status(400).json({ message: "Failed to create campaign" });
    }
  });

  app.get('/api/campaigns', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      let campaigns;
      if (user?.role === 'client') {
        campaigns = await storage.getCampaignsByClient(userId);
      } else {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      res.json(campaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      res.status(500).json({ message: "Failed to fetch campaigns" });
    }
  });

  // Clip routes
  app.post('/api/clips', isAuthenticated, async (req: any, res) => {
    try {
      const validatedData = insertClipSchema.parse({
        ...req.body,
        clipperId: req.user.claims.sub
      });
      const clip = await storage.createClip(validatedData);
      res.status(201).json(clip);
    } catch (error) {
      console.error("Error creating clip:", error);
      res.status(400).json({ message: "Failed to create clip" });
    }
  });

  app.get('/api/clips', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      let clips;
      if (user?.role === 'clipper') {
        clips = await storage.getClipsByClipper(userId);
      } else if (user?.role === 'manager') {
        clips = await storage.getPendingClips();
      } else {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      res.json(clips);
    } catch (error) {
      console.error("Error fetching clips:", error);
      res.status(500).json({ message: "Failed to fetch clips" });
    }
  });

  app.patch('/api/clips/:id/status', isAuthenticated, async (req: any, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      const user = await storage.getUser(req.user.claims.sub);
      if (user?.role !== 'manager' && user?.role !== 'admin') {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      await storage.updateClipStatus(id, status);
      res.json({ message: "Clip status updated" });
    } catch (error) {
      console.error("Error updating clip status:", error);
      res.status(500).json({ message: "Failed to update clip status" });
    }
  });

  // Analytics routes
  app.get('/api/analytics/client-dashboard', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (user?.role !== 'client') {
        return res.status(403).json({ message: "Unauthorized" });
      }
      
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      const endDate = new Date();
      
      const analytics = await storage.getAnalyticsByClientDateRange(userId, startDate, endDate);
      res.json(analytics);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
