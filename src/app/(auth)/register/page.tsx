"use client";
import { Button } from "@/src/components/ui/Button";
import { Card, CardBody, CardFooter } from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { authService } from "@/src/services/auth/auth.service";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMsg, setErrorMgs] = useState("");

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handleName = (name: string) => {
    setName(name);
  };

  const handleRegister = async () => {
    const data = { name, email, password };
    try {
      const response = await authService.register(data);
      toast.success(`Registo exitoso! ${response.name}`);
      router.push('/login');
    } catch (error: any) {
      setErrorMgs(error);
      toast.error(errorMsg);
    }
  };

  const emailValido = email.includes("@") && email.includes(".");
  const passwordValida = password.length >= 6;

  // El formulario es válido solo si ambos campos están bien
  const validForm = emailValido && passwordValida;
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans min-h-screen ">
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-linear-to-b from-mist-800 to-cyan-950">
        <Card>
          <h1 className="text-center text-4xl">Register</h1>
          <Form action={handleRegister}>
            <CardBody>
              <Input type="text" label="Full Name" setValue={handleName} />
              <Input type="email" label="Email" setValue={handleEmail} />
              <Input
                type="password"
                label="Password"
                setValue={handlePassword}
              />
            </CardBody>
            <CardFooter>
              <div className="flex flex-col">
                <Button
                  isDisabled={!validForm}
                  name="Crear cuenta"
                  type="submit"
                />
                 <Button
                  type="button"
                  name="Iniciar sesion"
                  handleClick={() => router.push("/login")}
                />
              </div>
            </CardFooter>
          </Form>
        </Card>
      </main>
    </div>
  );
}
