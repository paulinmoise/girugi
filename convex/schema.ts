import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table - core user data
  users: defineTable({
    email: v.string(),
    roles: v.array(v.union(
      v.literal("user"), 
      v.literal("verified"), 
      v.literal("volunteer"), 
      v.literal("admin")
    )),
    status: v.union(
      v.literal("active"), 
      v.literal("restricted"), 
      v.literal("banned")
    ),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  // User preferences
  preferences: defineTable({
    userId: v.id("users"),
    language: v.union(v.literal("en"), v.literal("ko")),
    city: v.optional(v.string()),
    dietary: v.optional(v.array(v.string())),
    interests: v.optional(v.array(v.string())),
    notificationPrefs: v.optional(v.object({
      pushEnabled: v.boolean(),
      emailEnabled: v.boolean(),
      taskReminders: v.boolean(),
      eventReminders: v.boolean(),
      genericContent: v.boolean(),
    })),
  }).index("by_user", ["userId"]),

  // Task status tracking for First 7 Tasks
  taskStatus: defineTable({
    userId: v.id("users"),
    taskId: v.string(),
    status: v.union(
      v.literal("not_started"),
      v.literal("in_progress"),
      v.literal("done")
    ),
    notes: v.optional(v.string()),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_task", ["userId", "taskId"]),

  // Verification submissions
  verificationSubmissions: defineTable({
    userId: v.id("users"),
    fileId: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("verified"),
      v.literal("rejected")
    ),
    rejectionReason: v.optional(v.string()),
    reviewedBy: v.optional(v.id("users")),
    reviewedAt: v.optional(v.number()),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // Feature flags / kill switches
  featureFlags: defineTable({
    feature: v.string(),
    enabled: v.boolean(),
    updatedBy: v.id("users"),
    updatedAt: v.number(),
    reason: v.optional(v.string()),
  }).index("by_feature", ["feature"]),

  // Audit logs for admin actions
  auditLogs: defineTable({
    actorId: v.id("users"),
    action: v.string(),
    targetType: v.string(),
    targetId: v.string(),
    metadata: v.optional(v.any()),
    createdAt: v.number(),
  })
    .index("by_actor", ["actorId"])
    .index("by_target", ["targetType", "targetId"])
    .index("by_time", ["createdAt"]),
});
