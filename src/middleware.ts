import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  console.log("¿Hay token?:", !!token);
  console.log("Ruta actual:", request.nextUrl.pathname);
  const { pathname } = request.nextUrl;

  // 1. Definir rutas protegidas
  const isProtectedRoute = pathname.startsWith('/products') || pathname.startsWith('/projects');

  // 2. Si es ruta protegida y NO hay token, redirigir al login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 3. Si el usuario ya está logueado e intenta ir al login/registro, enviarlo al dashboard
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }



  return NextResponse.next();
}

// Configuración para que solo corra en estas rutas (mejora el rendimiento)
export const config = {
  matcher: [
    '/products',
    '/projects',
    '/login',
    '/register'
  ],
};
