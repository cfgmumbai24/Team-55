const { cookies } = require("next/headers");
const { redirect } = require("next/navigation");

export const isLoggedIn = () => {
  const token = cookies().get("token")?.value;
  if (token) {
    redirect("/feed");
  }
};
