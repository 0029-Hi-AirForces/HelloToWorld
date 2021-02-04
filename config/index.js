module.exports = {
  username: process.env.TEXTNOW_USERNAME || "",
  password: process.env.TEXTNOW_PASSWORD || "",
  recipient: process.env.TEXTNOW_RECIPIENT || "(305) 791-1485",
  message: process.env.TEXTNOW_MESSAGE || "Hello to the Beautiful World",
  cookies_str: process.env.TEXTNOW_COOKIES || ""
};
