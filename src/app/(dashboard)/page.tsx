'use client'
import { Button } from "@/src/components/ui/Button";
import { useRouter } from "next/navigation";
import Overview from "./components/overview";


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
    
    <Overview/>
    </div>
  );
}
