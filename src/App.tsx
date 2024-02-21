import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <main className={dark ? 'dark' : ''}>
      <section className="font-mono duration-700 dark:bg-darktheme py-11  h-screen space-y-14">
        <header className="max-w-lg mx-auto space-y-10  rounded-md p-4 dark:bg-slate-600">
          <div className="flex justify-between items-center dark:text-whitetext">
            <h3 className="text-26 font-bold">devfinder</h3>
            <h4 className="flex gap-3 items-center cursor-pointer" onClick={() => setDark((prev) => !prev)}>
              {dark ? 'LIGHT' : 'DARK'}
              <div >
                {dark ? (
                  <Sun size={32} />
                ) : (
                  <Moon size={32} />
                )}
              </div>
            </h4>
          </div>
        </header>
      </section>
    </main>
  );
}

export default App;
