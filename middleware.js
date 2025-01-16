export const middleware = (request) => Response.json({ msg: 'hello there' })

export const config = {
  matcher: ['/about/:path*', '/tasks/:path*'],
}
