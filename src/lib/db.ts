import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Handle database connection - fails gracefully if no DB
let prisma: PrismaClient | null = null;

try {
  prisma = globalForPrisma.prisma ?? new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
  }
} catch (e) {
  console.warn('Database connection failed, using null client');
  prisma = null;
}

export { prisma };
