import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: { 
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: {nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.patname.startsWith('/dashboard');
      if (isOnDashboard) {
	if (isLOggedIn) return true;
	return false;
      } else if (isLoggedIn) {
	return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: []
} satisfies NextAuthConfig;
