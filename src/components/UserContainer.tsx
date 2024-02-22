import { Building, Link, MapPin, Twitter } from "lucide-react";
import ResponseData from "../types/api";
interface UserContainerProps {
  user: ResponseData | null;
}

export default function UserContainer({ user }: UserContainerProps) {
  function formatDate(isoDateString:string | undefined) {
    if(isoDateString === undefined) return `Unknown`;
    const months = [
      "Jan", "Feb", "March", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(isoDateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `joined ${day} ${month} ${year}`;
  }

  return (
    <main className="p-[32px] sm:p-[48px] rounded-lg bg-white dark:bg-lightDark shadow-container overflow-hidden">
      <section className="w-full flex justify-between dark:text-whitetext">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
          src={user?.avatar_url}
          alt="github user"
        />
        <div className=" ml-10 grow flex flex-wrap justify-between flex-col sm:flex-row">
          <div>
            <h2 className="font-bold text-[16px] sm:text-2xl">{user?.name}</h2>
            <span className="text-userColor">@{user?.login}</span>
          </div>
          <div>
            <span className="text-[12px] sm:text-base">
            {formatDate(user?.created_at)}
            </span>
          </div>
        </div>
      </section>
      <section className="w-full sm:pl-32 duration-1000">
        <p className="text-gray-400 mt-4 text-sm sm:text-base">{user?.bio}</p>
        <main className="flex text-center gap-7 mx-auto w-6/6 mt-8 bg-slate-200 rounded py-3 sm:px-7  dark:bg-darktheme">
          <div className="flex-1">
            <h6 className="text-slate-400 text-[7px] sm:text-base">Repos</h6>
            <p className="font-bold text-[16px] md:text-2xl dark:text-whitetext">
              {user?.public_repos}
            </p>
          </div>
          <div className="flex-1">
            <h6 className="text-slate-400 text-[7px] sm:text-base">
              Followers
            </h6>
            <p className="font-bold text-[16px] md:text-2xl dark:text-whitetext">
              {user?.followers}
            </p>
          </div>
          <div className="flex-1">
            <h6 className="text-slate-400 text-[7px] sm:text-base">
              Following
            </h6>
            <p className="font-bold text-[16px] md:text-2xl dark:text-whitetext">
              {user?.following}
            </p>
          </div>
        </main>
        <footer className="flex flex-col sm:flex-row gap-5 justify-between pt-4">
          <div className="flex flex-col gap-5 justify-between px-2 text-[14px]">
            <div className="flex  gap-2 dark:text-white">
              <MapPin />
              <span>{user?.location} {user?.location === null && "Not Available"}</span>
            </div>
            <div className="flex gap-2 dark:text-white cursor-pointer">
              <Link />
              <a href={user?.blog} target="_blank">
                {user?.blog} {user?.blog === null && "Not Available"}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-between px-2 text-[14px]">
            <div className="flex  gap-2 dark:text-white">
              <Twitter />
              <span>
                {user?.twitter_username}{" "}
                {user?.twitter_username === null && "Not Available"}
              </span>
            </div>
            <div className="flex gap-2 dark:text-white">
              <Building />
              <span>
                {user?.company} {user?.company === null && "Not Available"}
              </span>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
