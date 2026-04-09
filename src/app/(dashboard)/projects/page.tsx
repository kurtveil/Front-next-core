"use client";
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "@/src/components/ui/Card";
import SearchInput from "@/src/components/ui/InputSearch";
import { Project } from "@/src/interfaces/projects/project";
import { projectService } from "@/src/services/projects/projects.service";
import { Plus, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProjectPage() {
  const router = useRouter();
  const [errorMgs, setErrorMgs] = useState("");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        await projectService
          .getAll()
          .then((res) => {
            setProjects(res);
          })
          .catch(console.error);
        return toast.success("¡Se obtuvo todos los proyectos!");
      } catch (error: any) {
        setErrorMgs(error.message);
        toast.error(errorMgs || "Error al obtener proyectos");
      } finally {
        setLoading(false);
      }
    };

    getAllProjects();
  }, []);

  console.log(projects);
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p>
        Oversee enterprise operations, manage architectural timelines and
        resource allocation
      </p>
      <Button
        type="button"
        name="New project"
        className="w-full"
        handleClick={() => router.push("projects/create-project")}
      >
        <Plus></Plus>
      </Button>
      <SearchInput />
      {projects.map((project: Project, i) => {
        return (
          <Card key={i} className="my-4">
            <CardBody className="flex justify-between items-end">
              <ul>
                <li>
                  <Rocket className="w-15 h-15 m-3 text-gray-700" />
                </li>
                <li className="text-sm">PRIORITY</li>
                <li>High</li>
              </ul>
              <ul>
                <li>
                <CardTitle>{project.name}</CardTitle>
                </li>
                <li>
                  <span className="text-sm">LEAD: </span>
                  <span>Sara </span>
                </li>
                <li className="text-sm">STATUS</li>
                <li>
                  <span className="rounded bg-blue-400 ">Active</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className="text-sm">CLIENT: </span>
                  <span>Horizon S.A</span>
                </li>
                <li className="text-sm">TIMELINE</li>
                <li>65% complete</li>
              </ul>
            </CardBody>
            <CardFooter>
              <div className="flex items-start justify-start">
                <div className="flex -space-x-3">
                  <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg bg-amber-700 z-0"></div>
                  <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg bg-blue-700 z-10"></div>
                  <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg  bg-gray-700 z-20"></div>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
