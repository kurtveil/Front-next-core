"use client";
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { projectService } from "@/src/services/projects/projects.service";
import { Check, Gem, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const TYPES = [
  {
    id: 1,
    title: "Standar Launch",
    icon: <Rocket className="h-10 w-10"></Rocket>,
    description: "Default agile workflow monthly reporting.",
    selected: false,
  },
  {
    id: 2,
    title: "Architech Premium",
    icon: <Gem className="h-10 w-10"></Gem>,
    description: "High-density data tracking with daily AI audists.",
    selected: false,
  },
];

export default function CreateProjectPage() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const [isSelected, setIsSelected] = useState(Number);
  const handleProjectName = (projectName: string) =>
    setProjectName(projectName);
  const handleDescription = (description: string) =>
    setDescription(description);

  const handleCreateProject = async () => {
    try {
      console.log(projectName);
      console.log(description);
      
      
      const res = await projectService.create({name: projectName, description: description, type: 'standar'});
      console.log(res);
      if (res) {
        return router.push("/projects");
      }
      
    } catch (error: any) {
      toast.error(error || 'Error al crear proyecto');
    }
  }
  return (
    <div>
        <Card className="">
          <CardTitle>Fundations</CardTitle>
          <CardBody>
            <p>
              Every great enterprise project start with with a clear vision.
              Name yours describe the objective.
            </p>
            <Input
              label="Project Name"
              type="text"
              placelholder="project name..."
              setValue={handleProjectName}
            />
            <Input
              label="Description"
              type="textarea"
              placelholder="description..."
              setValue={handleDescription}
            />
            {TYPES.map((type, i) => {
              return (
                <button
                  key={i}
                  className="min-w-full"
                  onClick={() => setIsSelected(type.id)}
                >
                  <Card
                    className={`border-1 my-5  cursor-pointer hover:border-blue-700 hover:scale-90 ${isSelected === type.id ? "border-blue-700 bg-blue-50 scale-100" : "border-gray-200 hover:border-blue-400 hover:scale-100"}`}
                  >
                    {type.icon}
                    <CardTitle>
                      <p>{type.title}</p>
                    </CardTitle>
                    <CardBody>
                      <p>{type.description}</p>
                      {isSelected === type.id && (
                        <div className="absolute top-2 right-2 z-10 bg-blue-700 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />{" "}
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </button>
              );
            })}
          </CardBody>
          <CardFooter className="flex">
            <Button name="Save as Draft " className="mr-2" type="button" />
            <Button name="Continue to Settings" type="submit" handleClick={handleCreateProject}/>
          </CardFooter>
        </Card>
    </div>
  );
}
