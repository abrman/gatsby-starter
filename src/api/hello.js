/*
Example API call - subscribe with email using hasura as database
await axios.post("/api/hello", {email});
*/

import fetch from "node-fetch";

// Put this into env variable if you're going to use it. Or don't.
const hasura_admin_secret = "ADMIN_SECRET";

export default async function handler(req, res) {
  const email = req.body.email;
  const response = await fetch("https://domain.hasura.app/api/rest/subscribe", {
    method: "post",
    body: JSON.stringify({
      email,
    }),
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": hasura_admin_secret,
    },
  });
  const data = await response.json();

  const success = data.insert_subscribers.affected_rows === 1;

  res.status(success ? 200 : 500).json({
    success,
  });
}
