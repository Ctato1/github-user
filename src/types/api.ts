export default interface ResponseData {
  avatar_url: string;
  bio: string;
  blog: string ;
  created_at: string;
  followers: number;
  following: number;
  login: string;
  location:string | null;
  name: string;
  public_repos: number;
  company:string | null;
  twitter_username: string | null;
  url: string;
}
