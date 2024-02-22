import { useEffect, useState } from "react";
import ResponseData from "../types/api";

export default function useApi(){
    const [dark, setDark] = useState<boolean>(true);
    const [user, setUser] = useState<ResponseData | null>(null);
    const [result, setResult] = useState<boolean>(true);
    function darkMode() {
      setDark((prev) => !prev);
    }
  
    async function findUser(value: string) {
      try {
        const api = await fetch(`https://api.github.com/users/${value}`);
        if (!api.ok) throw new Error("user not found");
        const resp = await api.json();
        const respData = resp as ResponseData;
        const { avatar_url,bio, blog,created_at,followers,following,name,login,public_repos,twitter_username,url,location,company} = respData;
        
        
        setUser({avatar_url,bio, blog,created_at,followers,following,name,login,public_repos,twitter_username,url,location,company});
        setResult(true)
      } catch (error) {
          setResult(false)
      }
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.github.com/users/Ctato1');
          const data = await response.json();
          const respData = data as ResponseData;
          const { avatar_url,bio, blog,created_at,followers,following,name,login,public_repos,twitter_username,url,location,company} = respData;
          setUser({avatar_url,bio, blog,created_at,followers,following,name,login,public_repos,twitter_username,url,location,company});
        } catch (error) {
          alert('Error fetching data');
        }
      };
  
      fetchData();
    }, []);
    return{
        dark,
        user,
        result,
        darkMode,
        findUser,
    }
}