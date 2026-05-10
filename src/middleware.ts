import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isAdminPage = req.nextUrl.pathname.startsWith('/admin');
    const isDashboardPage = req.nextUrl.pathname.startsWith('/dashboard');
    const isSellerPage = req.nextUrl.pathname.startsWith('/marketplace/seller');

    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (isAdminPage && (!isAuth || token.role !== 'ADMIN')) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    if (isDashboardPage && !isAuth) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    if (isSellerPage && (!isAuth || (token.role !== 'SELLER' && token.role !== 'ADMIN'))) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    const response = NextResponse.next();
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (
          pathname.startsWith('/api/auth') ||
          pathname.startsWith('/api/paypal/webhook') ||
          pathname === '/' ||
          pathname.startsWith('/knowledge') ||
          pathname.startsWith('/languages') ||
          pathname.startsWith('/stories') ||
          pathname.startsWith('/marketplace') ||
          pathname.startsWith('/entertainment') ||
          pathname.startsWith('/tourism') ||
          pathname.startsWith('/contact') ||
          pathname.startsWith('/offline') ||
          pathname === '/manifest.json' ||
          pathname === '/robots.txt' ||
          pathname === '/sw.js' ||
          pathname.startsWith('/api/whatsapp-bot') ||
          pathname.startsWith('/api/flights') ||
          pathname.startsWith('/api/paypal') ||
          pathname.startsWith('/api/stripe')
        ) {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
