import { platform } from "os";

global.fetch = require("node-fetch");
export const getUserList = async payload => {
  const res = await fetch(
    `http://localhost:8000/user/userList?page=${payload.page}&pageSize=${
      payload.pageSize
    }`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then(res => res.json());
  return res;
};
