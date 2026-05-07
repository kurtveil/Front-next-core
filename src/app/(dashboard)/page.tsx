'use client'
import { Button } from "@/src/components/ui/Button";
import { Card, CardBody, CardFooter } from "@/src/components/ui/Card";
import { CheckCircle, Rocket, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const OVERVIEW_LIST = [
  {
    title: "ACTIVE PROJECTS",
    icon: (
      <Rocket className=" w-20 h-20 m-3 text-gray-700 shadow-2xl hover:text-blue-700" />
    ),
    quantity: 24,
    value: "+23%",
    item: (
      <div className="border-b w-40 border-blue-800 border-4 rounded"></div>
    ),
  },
  {
    title: "PENDING TASK",
    icon: (
      <CheckCircle className=" w-20 h-20 m-3 text-gray-700 shadow-2xl hover:text-blue-700" />
    ),
    quantity: "08",
    value: "Critical",
    item: (
      <div className="flex items-start justify-start">
        <div className="flex -space-x-3">
          <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg bg-amber-700 z-0"></div>
          <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg bg-blue-700 z-10"></div>
          <div className="w-8 border-transparent rounded-full h-8 border-2 shadow-lg  bg-gray-700 z-20"></div>
        </div>
      </div>
    ),
  },
  {
    title: "TEAM CAPACITY",
    icon: (
      <Users className=" w-20 h-20 m-3 text-gray-700 shadow-2xl hover:text-blue-700" />
    ),
    quantity: "92%",
    value: "Peak",
    item: (
        <h6 className="text-xs"> 14 members Online</h6>
    ),
  },
];
export default function Home() {
    const router = useRouter();
  
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">
        Overview <span className="text-blue-400 font-bold">Hub</span>
      </h1>
      <p>
        Manage your active operations and track team productivity in real-time
      </p>
      <Button type="button" name="New project" handleClick={() => router.push("projects/create-project")} />
    
      {OVERVIEW_LIST.map((menu, i) => {
        return (
          <Card key={i} className="my-4">
            <CardBody className="flex justify-between items-end">
              <div>
                <div className="items-start h-11">
                  <h5 className="text-xs text-gray-400">{menu.title}</h5>
                </div>
                <div className="flex items-end">
                  <span>
                    <h1 className="font-bold text-5xl">{menu.quantity}</h1>
                  </span>
                  <span>
                    <h6 className="px-2"> {menu.value}</h6>
                  </span>
                </div>
              </div>
              <div>{menu.icon}</div>
            </CardBody>
            <CardFooter>{menu.item}</CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
