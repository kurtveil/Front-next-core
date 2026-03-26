'use client'
import { Button } from "@/src/components/ui/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { Gem, Rocket } from "lucide-react";
import { useState } from "react";

export default function CreateProjectPage() {
  const [projectName, setProjectName] = useState("");
  const handleProjectName = (projectName: string) => setProjectName(projectName);

  const handleSelected = () => {
    
  }
  return (
    <div>
      <Card className="">
        <CardTitle>Fundations</CardTitle>
        <CardBody>
          <p>
            Every great enterprise project start with with a clear vision. Name
            yours describe the objective.
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
            setValue={handleProjectName}
          />
          <button onClick={handleSelected}>
          <Card className="border-1 my-5" >
            <Rocket className="h-10 w-10"></Rocket>
            <CardTitle>
              <p>Standar Launch</p>
            </CardTitle>
            <CardBody>
              <p>Default agile workflow monthly reporting.</p>
            </CardBody>
          </Card>
          </button>
           <Card className="border-1 my-5">
            <Gem className="h-10 w-10"></Gem>
            <CardTitle>
              <p>Architech Premium</p>
            </CardTitle>
            <CardBody>
              <p>High-density data tracking with daily AI audists.</p>
            </CardBody>
          </Card>
        </CardBody>
        <CardFooter className="flex">
          <Button name="Save as Draft " className="mr-2" type="button" />
          <Button name="Continue to Settings" type="submit" />
        </CardFooter>
      </Card>
    </div>
  );
}
