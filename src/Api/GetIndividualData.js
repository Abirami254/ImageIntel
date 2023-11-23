import { url } from "../EndPoint/EndPoint";

export const GetIndividualImage = async (id) => {
  const URLPath = `${url}/id/${id}/info`;
  const response = await fetch(URLPath)
    .then((response) => {
      return response.json();
    })
    .then((imgdata) => {
      return imgdata;
    })
    .catch((err) => console.log("Error is", err));
  return response;
};
