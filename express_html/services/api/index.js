global.fetch = require("node-fetch");
export const getUserList = async () => {
  const res = await fetch("http://localhost:8000/user/userList", {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
  return res;
};
