import { NextResponse } from 'next/server';
import { isAuthenticated } from './src/utils/auth';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin') && !isAuthenticated()) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage if not authenticated
  }

  return NextResponse.next();
}