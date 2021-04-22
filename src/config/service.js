import axios from "axios";
export const API = "http://208.109.15.202:3000/";

export const Service = async (method, apiPath, params) => {
  const url = `${API + apiPath}`;
  return axios({
    method: method,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },

    url: url,
    params,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return { message: err, type: "danger", data: { status: "error" } };
    });
};
