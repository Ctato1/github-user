import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  dark: boolean;
  setDark: () => void;
}
export default function Header({ dark, setDark }: HeaderProps) {
  return (
    <header>
      <div className="flex justify-between items-center dark:text-whitetext">
        <h3 className="text-26 font-bold">devfinder</h3>
        <h4
          className={`flex gap-3 items-center cursor-pointer duration-200 ${
            dark ? " hover:text-darkHover text-white" : " hover:text-slate-900 text-gray-500"
          }`}
          onClick={setDark}
        >
          {dark ? "LIGHT" : "DARK"}
          <div>{dark ? <Sun size={32} /> : <Moon size={32} />}</div>
        </h4>
      </div>
    </header>
  );
}
