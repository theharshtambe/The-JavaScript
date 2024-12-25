const URL = 'https://api.github.com/users/theharshtambe';

const githubUser = fetch(URL);

console.log(githubUser);

githubUser.then((data) => console.log(data));
