import qs from "qs";

const CLIENT_ID = "57c76613ffecee9";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token"
    };
    // window.location takes user to the url
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  }
};
