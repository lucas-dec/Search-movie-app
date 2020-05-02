export function getData(API) {
  return fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.Response !== "True") {
        throw Error(data.Error);
      }
      return data;
    });
}
