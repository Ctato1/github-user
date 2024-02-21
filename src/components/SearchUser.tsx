import { Search } from "lucide-react";
import { useState } from "react";

interface SearchUserProps{
    findUser:(value:string)=>void;
}

export default function SearchUser({findUser}:SearchUserProps) {
    const [value, setValue] = useState<string>("");
  async function prevent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim()) return;
    findUser(value);
    setValue('')
  }
  return (
    <form
      onSubmit={prevent}
      className="overflow-hidden flex gap-1 items-center bg-whitetext rounded-xl cursor-pointer p-2 border-custom-gray border-solid border-1 shadow-2xl dark:bg-lightDark"
    >
      <Search color="#0079FF" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="grow h-8 px-1 outline-none dark:bg-lightDark dark:text-whitetext"
      />
      <button
        type="submit"
        className="rounded-lg border-none lg:p-3 bg-buttonBg text-whitetext font-bold md:p-2 "
      >
        Search
      </button>
    </form>
  );
}
