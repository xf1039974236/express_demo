import { platform } from "os";

global.fetch = require("node-fetch");
//const devURL = process.env.globalUrl;
const devURL = "http://localhost:8001";
console.log(devURL, "devURL11-----");

export const getUserList = async params => {
  const res = await fetch(
    `${devURL}/user/userList?page=${params.page}&pageSize=${params.pageSize}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
  return res;
};

// export const saveUserFun = async params => {
//   const res = await fetch(
//     `${devURL}/user`,
//     {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(params)
//     }
//   )
//     .then(res => res.json())
//     .catch(err => {
//       throw err;
//     });
//   return res;
// };
export const saveUserFun = async params => {
  const res = await fetch(`${devURL}/user`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
  return res;
};
