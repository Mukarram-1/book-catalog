import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname === "/add") {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/add/:path*"]
}
