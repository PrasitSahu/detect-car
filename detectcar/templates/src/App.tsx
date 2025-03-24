import { useState } from "react";
import "./App.css";
import DropArea from "./components/DropArea";
import PopUp from "./components/PopUp";

function App() {
  const [imgUrl, setImgUrl] = useState<string>("");
  const [popupShow, setPopupShow] = useState<boolean>(false);
  return (
    <main className="w-screen h-screen flex flex-col">
      <header className="w-screen h-20 p-3 flex flex-row">
        <h1 className="font-bold text-2xl px-3">Detect cars |</h1>
      </header>
      <DropArea
        onUpdate={(url) => {
          setImgUrl(url);
          setPopupShow(true);
        }}
      />
      <PopUp
        imgUrl={imgUrl}
        show={popupShow}
        onClose={() => setPopupShow(false)}
      />
    </main>
  );
}

export default App;
