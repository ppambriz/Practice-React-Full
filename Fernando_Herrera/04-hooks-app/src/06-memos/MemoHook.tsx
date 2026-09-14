import { useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

export const MemoHook = () => {
  const [title, settitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  const handleMyAPICall = () => console.log("Llamar a mi API");

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />

      <MySubTitle subTitle={subTitle} callMyAPI={handleMyAPICall}/>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => settitle("Hello" + new Date().getTime())}
      >
        Cambiar titulo
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle("Wold ")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
