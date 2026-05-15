import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const publicRoutes = [
  '/',
  '/knowledge',
  '/languages',
  '/marketplace',
  '/tourism',
  '/stories',
  '/entertainment',
  '/contact',
  '/about',
  '/offline',
];

const authRoutes = ['/auth/signin', '/auth/signup', '/auth/error'];

const protectedRoutes = ['/dashboard', '/admin'];

const isPublicPath = (path: string) =>
  publicRoutes.some(route => path === route || path.startsWith(`${route}/`)) ||
  authRoutes.some(route => path === route || path.startsWith(`${route}/`));

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    if (authRoutes.includes(path)) {
      if (token) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
      return NextResponse.next();
    }

    if (isPublicPath(path)) {
      return NextResponse.next();
    }

    if (protectedRoutes.some(route => path === route || path.startsWith(`${route}/`))) {
      if (!token) {
        const signInUrl = new URL('/auth/signin', req.url);
        signInUrl.searchParams.set('callbackUrl', path);
        return NextResponse.redirect(signInUrl);
      }

      if (path.startsWith('/admin') && token.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|sw.js|robots.txt|offline).*)',
  ],
};
