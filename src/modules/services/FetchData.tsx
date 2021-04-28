export const fetchUsers = (url: string, user: string | null, setData: Function, setError: Function) => {
    const loc = url + user;
    fetch(loc)
    .then((response) => response.json())
    .then((githubUsersData) => setData(githubUsersData))
    .catch((error) => setError(error.toString()));
}

export const fetchRepos = (url: string, user: string | null, setData: Function, setError: Function) => {
    const loc = url + user + "/repos";
    fetch(loc)
    .then((response) => response.json())
    .then((githubReposData) => setData(githubReposData))
    .catch((error) => setError(error.toString()));
}