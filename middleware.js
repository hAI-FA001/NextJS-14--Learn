import { NextResponse } from 'next/server'

export const middleware = (request) => {
  //   return NextResponse.redirect(new URL('/', request.URL))
  //   console.log(request)
  //   console.log(request.nextUrl.origin)
  //   return NextResponse.redirect(new URL(request.nextUrl.origin))
}

export const config = {
  matcher: ['/about/:path*', '/tasks/:path*'],
}
