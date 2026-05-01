import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Handle database connection - fails gracefully if no DB
let prismaClient: PrismaClient | null = null;

const createPrismaClient = () => {
  if (prismaClient) return prismaClient;
  
  try {
    if (process.env.DATABASE_URL) {
      prismaClient = globalForPrisma.prisma ?? new PrismaClient();
      if (process.env.NODE_ENV !== 'production') {
        globalForPrisma.prisma = prismaClient;
      }
    } else {
      console.warn('DATABASE_URL not set, using null client');
    }
  } catch (e) {
    console.warn('Database connection failed, using null client');
    prismaClient = null;
  }
  
  return prismaClient;
};

// Export lazy-loaded Prisma client
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    if (prop === 'then') return undefined;
    const client = createPrismaClient();
    if (!client) {
      return () => undefined;
    }
    return (client as any)[prop];
  }
});
