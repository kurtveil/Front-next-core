import { Project } from "@/src/interfaces/projects/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const projectService = {
  create: async (project: Project): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        return response;
      }
    } catch (error: any) {
      throw new Error(error || "Error al crear proyecto");
    }
  },

  getAll: async (): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      // Si la respuesta no es 200-299, lanzamos error con el detalle
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      
      return  response.json(); // Aquí obtenemos la data real
    } catch (error: any) {
      throw new Error(error || "Error al obtener los proyectos");
    }
  },
};
