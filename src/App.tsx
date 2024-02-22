import Header from "./components/Header";
import SearchUser from "./components/SearchUser";
import UserContainer from "./components/UserContainer";
import useApi from "./hooks/useApi";

function App() {

  const {dark,darkMode,findUser,result,user}= useApi();
  return (
    <main className={dark ? "dark" : ""}>
      <section className="font-mono duration-700 py-5 sm:py-14 dark:bg-darktheme h-full 2xl:h-screen">
        <main className="mx-auto space-y-8  rounded-md px-2 lg:max-w-screen-md md:max-w-screen-sm">
          <Header dark={dark} setDark={darkMode} />
          <SearchUser findUser={findUser} result={result}/>
          <UserContainer user={user}/>
        </main>
      </section>
    </main>
  );
}

export default App;
