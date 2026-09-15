import { Link } from "react-router";

export const AboutPage = () => {
  console.log("Hola");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {/* <a href="/profile">Perfil</a> */} {/*Renderiza y reinicia todo*/}
        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">Perfil</Link>{" "}
        {/*No renderiza, cambia la pagina
        solamente*/}
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">Iniciar sesion</Link>
      </div>
    </div>
  );
};
