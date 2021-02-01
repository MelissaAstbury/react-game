export const fetchChars = () => {
  const requests = [];
  for (let i = 1; i <= 150; i++) {
    requests.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())
    );
  }
  //waits for all promises to be resolved (all data colected)
  return Promise.all(requests);
};
