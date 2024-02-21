import { Moon, Sun } from "lucide-react";

interface HeaderProps{
    dark:boolean;
    setDark:()=>void;
}
export default function Header({dark,setDark}:HeaderProps) {
  return (
    <>
      <header className=" mx-auto space-y-10  rounded-md p-4 dark:bg-slate-600 lg:max-w-screen-md md:max-w-screen-sm">
        <div className="flex justify-between items-center dark:text-whitetext">
          <h3 className="text-26 font-bold">devfinder</h3>
          <h4
            className="flex gap-3 items-center cursor-pointer"
            onClick={setDark}
          >
            {dark ? "LIGHT" : "DARK"}
            <div>{dark ? <Sun size={32} /> : <Moon size={32} />}</div>
          </h4>
        </div>
      </header>
    </>
  );
}
