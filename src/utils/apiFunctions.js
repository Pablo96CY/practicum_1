import localize from "./localize";

export const checkResponse = (result) => {
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
}