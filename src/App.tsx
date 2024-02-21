import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  function darkMode(){
    setDark((prev) => !prev)
  }
  return (
    <main className={dark ? "dark" : ""}>
      <section className="font-mono duration-700 dark:bg-darktheme py-11  h-screen space-y-14">
        <Header dark={dark} setDark={darkMode}/>
      </section>
    </main>
  );
}

export default App;
