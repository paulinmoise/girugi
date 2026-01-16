import { query } from "./_generated/server";

// Simple ping query to verify Convex is working
export const ping = query({
  args: {},
  handler: async () => {
    return { 
      status: "ok", 
      timestamp: Date.now(),
      message: "Convex is connected and working!"
    };
  },
});
