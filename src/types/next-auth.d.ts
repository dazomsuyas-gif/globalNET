import NextAuth from 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: 'USER' | 'ADMIN' | 'SELLER';
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role?: 'USER' | 'ADMIN' | 'SELLER';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'USER' | 'ADMIN' | 'SELLER';
  }
}
