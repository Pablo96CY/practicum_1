import localize from "./localize";

export const checkResponse = (result: Response) => {
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
}

export const request = (url: string, options?: any) => {
  return fetch(url, options).then(checkResponse);
}