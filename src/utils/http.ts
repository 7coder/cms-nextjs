const getRq = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const postRq = async (url: string, body: object) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  return json;
};

export default {
  getRq,
  postRq,
};
