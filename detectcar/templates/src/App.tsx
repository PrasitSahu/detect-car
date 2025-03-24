import "./App.css";
import DropArea from "./components/DropArea";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <header className="w-screen h-20 p-3 flex flex-row">
        <h1 className="font-bold text-2xl px-3">Detect cars |</h1>
      </header>
      <DropArea />
    </main>
  );
}

export default App;
