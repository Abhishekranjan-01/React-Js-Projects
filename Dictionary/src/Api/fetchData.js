export default async function fetchData(name) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`)
    .then(async (resp) => {
      if (!resp.ok) throw new Error("Word Not Found");
      else return await resp.json();
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
}
