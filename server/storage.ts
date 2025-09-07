import {
  users,
  teams,
  campaigns,
  clips,
  applications,
  messages,
  analytics,
  teamMembers,
  type User,
  type UpsertUser,
  type InsertTeam,
  type Team,
  type InsertCampaign,
  type Campaign,
  type InsertClip,
  type Clip,
  type InsertApplication,
  type Application,
  type InsertMessage,
  type Message,
  type Analytics,
  type TeamMember,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc, sql } from "drizzle-orm";

export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Team operations
  createTeam(team: InsertTeam): Promise<Team>;
  getTeamsByClient(clientId: string): Promise<Team[]>;
  getTeamsByManager(managerId: string): Promise<Team[]>;
  getTeamMembers(teamId: string): Promise<(TeamMember & { clipper: User })[]>;
  addTeamMember(teamId: string, clipperId: string): Promise<void>;

  // Campaign operations
  createCampaign(campaign: InsertCampaign): Promise<Campaign>;
  getCampaignsByClient(clientId: string): Promise<Campaign[]>;
  getCampaignsByTeam(teamId: string): Promise<Campaign[]>;

  // Clip operations
  createClip(clip: InsertClip): Promise<Clip>;
  getClipsByCampaign(campaignId: string): Promise<Clip[]>;
  getClipsByClipper(clipperId: string): Promise<Clip[]>;
  updateClipStatus(clipId: string, status: string): Promise<void>;
  getPendingClips(): Promise<(Clip & { clipper: User; campaign: Campaign })[]>;

  // Application operations
  createApplication(application: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;
  updateApplicationStatus(applicationId: string, status: string): Promise<void>;

  // Analytics operations
  getAnalyticsByClip(clipId: string): Promise<Analytics[]>;
  getAnalyticsByClientDateRange(clientId: string, startDate: Date, endDate: Date): Promise<any>;

  // Message operations
  createMessage(message: InsertMessage): Promise<Message>;
  getMessagesBetweenUsers(userId1: string, userId2: string): Promise<Message[]>;
  markMessageAsRead(messageId: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations (mandatory for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Team operations
  async createTeam(team: InsertTeam): Promise<Team> {
    const [newTeam] = await db.insert(teams).values(team).returning();
    return newTeam;
  }

  async getTeamsByClient(clientId: string): Promise<Team[]> {
    return await db.select().from(teams).where(eq(teams.clientId, clientId));
  }

  async getTeamsByManager(managerId: string): Promise<Team[]> {
    return await db.select().from(teams).where(eq(teams.managerId, managerId));
  }

  async getTeamMembers(teamId: string): Promise<(TeamMember & { clipper: User })[]> {
    return await db
      .select()
      .from(teamMembers)
      .leftJoin(users, eq(teamMembers.clipperId, users.id))
      .where(eq(teamMembers.teamId, teamId))
      .then(rows => rows.map(row => ({
        ...row.team_members,
        clipper: row.users!
      })));
  }

  async addTeamMember(teamId: string, clipperId: string): Promise<void> {
    await db.insert(teamMembers).values({ teamId, clipperId });
  }

  // Campaign operations
  async createCampaign(campaign: InsertCampaign): Promise<Campaign> {
    const [newCampaign] = await db.insert(campaigns).values(campaign).returning();
    return newCampaign;
  }

  async getCampaignsByClient(clientId: string): Promise<Campaign[]> {
    return await db.select().from(campaigns).where(eq(campaigns.clientId, clientId));
  }

  async getCampaignsByTeam(teamId: string): Promise<Campaign[]> {
    return await db.select().from(campaigns).where(eq(campaigns.teamId, teamId));
  }

  // Clip operations
  async createClip(clip: InsertClip): Promise<Clip> {
    const [newClip] = await db.insert(clips).values(clip).returning();
    return newClip;
  }

  async getClipsByCampaign(campaignId: string): Promise<Clip[]> {
    return await db.select().from(clips).where(eq(clips.campaignId, campaignId));
  }

  async getClipsByClipper(clipperId: string): Promise<Clip[]> {
    return await db.select().from(clips).where(eq(clips.clipperId, clipperId)).orderBy(desc(clips.createdAt));
  }

  async updateClipStatus(clipId: string, status: string): Promise<void> {
    await db.update(clips).set({ status: status as any }).where(eq(clips.id, clipId));
  }

  async getPendingClips(): Promise<(Clip & { clipper: User; campaign: Campaign })[]> {
    return await db
      .select()
      .from(clips)
      .leftJoin(users, eq(clips.clipperId, users.id))
      .leftJoin(campaigns, eq(clips.campaignId, campaigns.id))
      .where(eq(clips.status, 'pending'))
      .orderBy(desc(clips.createdAt))
      .then(rows => rows.map(row => ({
        ...row.clips,
        clipper: row.users!,
        campaign: row.campaigns!
      })));
  }

  // Application operations
  async createApplication(application: InsertApplication): Promise<Application> {
    const [newApplication] = await db.insert(applications).values(application).returning();
    return newApplication;
  }

  async getApplications(): Promise<Application[]> {
    return await db.select().from(applications).orderBy(desc(applications.createdAt));
  }

  async updateApplicationStatus(applicationId: string, status: string): Promise<void> {
    await db.update(applications).set({ status }).where(eq(applications.id, applicationId));
  }

  // Analytics operations
  async getAnalyticsByClip(clipId: string): Promise<Analytics[]> {
    return await db.select().from(analytics).where(eq(analytics.clipId, clipId));
  }

  async getAnalyticsByClientDateRange(clientId: string, startDate: Date, endDate: Date): Promise<any> {
    // This would be a complex query joining clips, campaigns, and analytics
    // For now, return mock structure
    return {
      totalViews: 47200000,
      totalLikes: 3200000,
      totalShares: 850000,
      engagementRate: 8.4,
      newFollowers: 12847,
      activeClips: 156,
      platformBreakdown: {
        youtube: { views: 18200000, percentage: 38.5 },
        tiktok: { views: 15800000, percentage: 33.5 },
        instagram: { views: 13200000, percentage: 28.0 }
      }
    };
  }

  // Message operations
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async getMessagesBetweenUsers(userId1: string, userId2: string): Promise<Message[]> {
    return await db
      .select()
      .from(messages)
      .where(
        and(
          eq(messages.senderId, userId1),
          eq(messages.recipientId, userId2)
        )
      )
      .orderBy(desc(messages.createdAt));
  }

  async markMessageAsRead(messageId: string): Promise<void> {
    await db.update(messages).set({ isRead: true }).where(eq(messages.id, messageId));
  }
}

export const storage = new DatabaseStorage();
