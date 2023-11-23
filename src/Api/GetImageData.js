import { url } from "../EndPoint/EndPoint";

export const GetImageData = async () => {
  const URLPath = `${url}/v2/list`;
  const response = await fetch(URLPath)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("Error is", err));
  return response;
};
