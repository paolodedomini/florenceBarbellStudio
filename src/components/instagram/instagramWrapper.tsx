import tokenUpdate from "./ServerActionRefreshToken";

async function InstagramWrapperToken({
  renderItem,
}: {
  renderItem: (token: any) => JSX.Element;
}) {
  /**
   * @param {Function} tokenUpdate
   * @var {string} token{
   * @var {string} grant_type = "ig_refresh_token\"
   * @var {string} client_secret = nella dash di meta: basic display -> Chiave segreta di Instagram
   * @var {string} access_token = "access token dell'utente tester da generare""
   */

  const token = tokenUpdate(
    "IGQWRQcmd0Y3Rpci0wT21LcVVaQ0JUQXBYVHB3QlkyLVFRLXlIck9Bc3B4Qmd3V0tIZAElBZAVZAPaXNxTzdTX1FIVXUwUXBCVnBFTTBUSWMxdFRJQWh3aHBnVDdOVVRndnhfclRrTmNtZAk1NLVR2cGlvcHpqeW1tQXcZD",
    "Florence_barbell_studio",
    "Florenceb01!"
  );

  return renderItem(token);
}

export default InstagramWrapperToken;
