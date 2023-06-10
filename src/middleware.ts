import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const nextPathname = request.nextUrl.pathname;
  const isRootPath = nextPathname === '/';

  if (isRootPath) {
    return NextResponse.redirect(new URL('/kamban', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.*\\.).*)'],
};
