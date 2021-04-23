import axios from "axios";
export const API = "http://208.109.15.201:3000/";

export const Service = async (method, apiPath, params) => {
  console.log("ser");
  const url = `${API + apiPath}`;
  console.log("params", params);
  let getP = Object.keys(params);
  console.log("getP", getP);
  return axios({
    method: method,

    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    body: {
      categoryId: 2,
      categoryName: "Men",
    },
    url: url,
  })
    .then((res) => {
      console.log("ser res", res);
      return res;
    })
    .catch((err) => {
      console.log("ser err", err);
      return { message: err, type: "danger", data: { status: "error" } };
    });
};
