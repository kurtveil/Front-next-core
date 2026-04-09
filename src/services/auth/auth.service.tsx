// Importa tus interfaces si ya las definiste en la carpeta /interfaces
import {
  LoginDto,
  RegisterDto,
  AuthResponse,
} from "../../interfaces/auth.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  // Método para Login
  login: async (credentials: LoginDto): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include"
    });

    const data = await response.json();
    if (!response.ok) {
      // Lanzamos el error para que la Server Action lo atrape
      throw new Error(data.error || "Error al iniciar sesión");
    }

    return data;
  },

  // Método para Registro
  register: async (userData: RegisterDto): Promise<RegisterDto> => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
     throw new Error(data.message || 'Error al registra el usuario');
    }

    return data;
  },


   handleLogout:  async () => {
    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        // ¡VITAL! Sin esto, el navegador no enviará ni recibirá cookies
        credentials: "include", 
      });

      if (response.ok) {
        return response; 
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }
};
