import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchRepos } from "./modules";
import { UserInput, GithubUsers, GithubRepos, ResetBtn } from "./modules";
import "./modules/styles/styles.css";
export const App:React.FC = () => {
  const [users, setUsers] = useState({});
  const [repos, setRepos] = useState<[]>([]);
  const [error, setError] = useState("");
  const [user, setUser] = useState<string | null>(null);

  const handleInput = (input: string): void => {
    setUser(input);
  }

  const resetState = () => {
    setUsers({});
    setRepos([]);
    setUser(null);
  }

  useEffect(() => {
    fetchUsers("https://api.github.com/users/", user, setUsers, setError);
  },[user]);

  useEffect(() => {
    fetchRepos("https://api.github.com/users/", user, setRepos, setError);
  },[user]);

  if(error)
  {
    return <div>{error}</div>
  }

  if(!users)
  {
    return <div>Loading...</div>
  }

  return (
    <div>
      {user === null ? <UserInput handleInput={handleInput} /> : ""}
      {user !== null ? <GithubUsers data={users}/> : ""}
      {user !== null ? <GithubRepos data={repos} /> : ""}
      {user !== null ? <ResetBtn resetState={resetState} /> : ""}
    </div>
  );
}

export default App;
