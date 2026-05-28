"use client";
import { Button } from "@/src/components/ui/Button";
import { Card, CardBody, CardFooter } from "@/src/components/ui/Card";
import Input from "@/src/components/ui/Input";
import { authService } from "@/src/services/auth/auth.service";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMsg, setErrorMgs] = useState("");
  // const { data: session } = useSession();
  const { status } = useSession();

  const handleLogin = async () => {
    setErrorMgs("");
    try {
      const data = await authService.login({ email, password });
      if (data.status == 200) {
        localStorage.setItem("token", data.access_token);
        toast.success("¡Bienvenido de nuevo!");
        return router.push("/");
      }
      toast.error(data.message || "Error al iniciar sesión");
    } catch (error: any) {
      toast.error(error.message || "Error al iniciar sesión");
      setErrorMgs(error.message);
    }
  };

  const handleEmail = (email: string) => setEmail(email);
  const handlePassword = (password: string) => setPassword(password);

  const emailValido = email.includes("@") && email.includes(".");
  const passwordValida = password.length >= 6;

  // El formulario es válido solo si ambos campos están bien
  const formularioValido = emailValido && passwordValida;

  // const authGoogle = () => {
  //   signIn("google")
  // }

  //   if (session) {
  //     return (
  //       <div style={{ padding: "20px" }}>
  //         <p>Bienvenido, {session.user?.name}</p>
  //         <p>
  //           <strong>Tu Google ID Token:</strong>
  //         </p>
  //         <textarea
  //           readOnly
  //           value={session.id_token}
  //           style={{ width: "100%", height: "100px", color: "black" }}
  //         />
  //         <br />
  //         <button onClick={() => signOut()}>Cerrar sesión</button>
  //       </div>
  //     );
  //   }

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // O a tu dashboard
    }
  }, [status]);

  // if (status === "loading")
  //   return (
  //     <div className="flex justify-center">
  //       {" "}
  //       <div className="loader"></div>{" "}
  //     </div>
  //   );

  //
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans  ">
      <main
        id="bg_test"
        className="flex flex-1 w-full flex-col items-center justify-center bg-linear-to-b from-mist-800 to-cyan-950"
      >
        <Card className="w-96 h-[30rem]">
          <h1 className="text-center text-3xl">Login</h1>
          {/* Mostrar alerta si hay error */}
          {errorMsg && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {errorMsg}
            </div>
          )}
          <Form action={handleLogin} className="my-4">
            <CardBody>
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
                  type="submit"
                  name="Iniciar Sesion"
                  isDisabled={!formularioValido}
                />
                <Button
                  type="button"
                  name="Crear cuenta"
                  handleClick={() => router.push("/register")}
                />
                <hr />
                <Button
                  type="button"
                  name="Iniciar sesión con Google"
                  handleClick={() => signIn("google", { callbackUrl: "/" })}
                />
              </div>
            </CardFooter>
          </Form>
        </Card>
      </main>
    </div>
  );
}
