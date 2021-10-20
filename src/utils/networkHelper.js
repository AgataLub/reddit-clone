export async function dataFetcher(url) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });
  const myJson = await response.json();
  return myJson;
}
