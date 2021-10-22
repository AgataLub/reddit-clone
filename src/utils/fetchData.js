function fetchData(url, permalink) {
  if (permalink === undefined) permalink = "";

  let string = url.substring(0, url.lastIndexOf("/")) + permalink + url.substring(url.lastIndexOf("/"));

  const response = fetch(string, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });
  const myJson = response.json;
  return myJson;
}

export default fetchData;
