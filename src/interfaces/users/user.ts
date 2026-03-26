import { Project } from "../projects/project";

export interface User{
    id: number;
    name: string;
    email: string;
    projects: Project[];
    role: string;
    password?: string
}