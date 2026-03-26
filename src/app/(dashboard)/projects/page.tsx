"use client";
import { Button } from "@/src/components/ui/Button";
import { Card, CardBody, CardFooter } from "@/src/components/ui/Card";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectPage() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Projects
      </h1>
      <p>
        Oversee enterprise operations, manage architectural timelines and resource allocation
      </p>
      <Button type="button" name="New project" handleClick={()=> router.push('projects/create-project')}>
        <Plus></Plus>
      </Button>
      <Card className="my-4">
        <CardBody className="flex justify-between items-end">
          <div>
            <div className="items-start h-11">
              <h5 className="text-xs text-gray-400">{'menu.title'}</h5>
            </div>
            <div className="flex items-end">
              <span>
                <h1 className="font-bold text-5xl">{'menu.quantity'}</h1>
              </span>
              <span>
                <h6 className="px-2"> {'menu.value'}</h6>
              </span>
            </div>
          </div>
          <div>{'menu.icon'}</div>
        </CardBody>
        <CardFooter>{'menu.item'}</CardFooter>
      </Card>
    </div>
  );
}
