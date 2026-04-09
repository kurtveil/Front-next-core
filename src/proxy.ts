import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// routes.ts
export const PROTECTED_ROUTES = ['/products', '/projects', '/dashboard', '/admin', '/settings'];
export const AUTH_ROUTES = ['/login', '/register'];
export const PUBLIC_ROUTES = ['/about', '/contact'];


export function proxy(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const { pathname } = request.nextUrl;

 // 1. Verificación exacta para la raíz o rutas que empiecen con las protegidas
  const isProtectedRoute = pathname === '/' || PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));


  // 2. Si es ruta protegida y NO hay token, redirigir al login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. Si el usuario ya está logueado e intenta ir al login/registro, enviarlo al dashboard
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }



  return NextResponse.next();
}

// Configuración para que solo corra en estas rutas (mejora el rendimiento)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],

};
