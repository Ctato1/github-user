import React, { useState } from "react";
import Header from "./components/Header";
import SearchUser from "./components/SearchUser";

function App() {
  const [dark, setDark] = useState<boolean>(true);
  const [user, setUser] = useState({});
  function darkMode() {
    setDark((prev) => !prev);
  }

  async function findUser(value: string) {
    try {
      const api = await fetch(`https://api.github.com/users/${value}`);
      if (!api.ok) throw new Error("user not found");
      const resp = await api.json();
      setUser(resp);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
        setUser({});
      }
    }
  }
  console.log(user);

  return (
    <main className={dark ? "dark" : ""}>
      <section className="font-mono duration-700  py-11 dark:bg-darktheme h-screen space-y-14">
        <main className="mx-auto space-y-10  rounded-md p-4 lg:max-w-screen-md md:max-w-screen-sm">
          <Header dark={dark} setDark={darkMode} />
          <SearchUser findUser={findUser} />
        </main>
      </section>
    </main>
  );
}

export default App;
