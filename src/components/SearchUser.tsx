import { Search } from "lucide-react";
import { useState } from "react";

interface SearchUserProps {
  findUser: (value: string) => void;
  result: boolean;
}

export default function SearchUser({ findUser, result }: SearchUserProps) {
  const [value, setValue] = useState<string>("");
  async function prevent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim()) return;
    findUser(value);
    setValue("");
  }
  return (
    <form
      onSubmit={prevent}
      className="overflow-hidden flex gap-1 items-center bg-whitetext rounded-xl cursor-pointer p-2 border-custom-gray border-solid border-1 shadow-input dark:bg-lightDark"
    >
      <Search color="#0079FF" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="grow h-8 px-1 outline-none dark:bg-lightDark dark:text-whitetext placeholder:text-[10px] sm:placeholder:text-base"
      />
      {!result && (
        <span className="text-red-600 pr-2 text-[9px] sm:text-base animate-pulse">
          No Result
        </span>
      )}
      <button
        type="submit"
        className="rounded-lg border-none p-1 bg-buttonBg text-whitetext font-bold md:p-2 text-[8px] sm:text-base duration-300 hover:bg-buttonHover"
      >
        Search
      </button>
    </form>
  );
}
