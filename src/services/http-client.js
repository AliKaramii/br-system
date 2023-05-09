// seperate fetch call and res.json here
//  take url and return data

const baseUrl = "/api"; //TODO move base url to .env file

export const fetchData = async (url) => {
  const res = await fetch(`${baseUrl}${url}`);
  const { data } = await res.json();
  // console.log("HTTP: ", data);
  return data;
};
