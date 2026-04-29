import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // Do whatever you want here, like validate the token
    // or `req.nextUrl.pathname.startsWith('/api/protected')` check
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = { matcher: ["/dashboard/:path*", "/admin/:path*"] }
