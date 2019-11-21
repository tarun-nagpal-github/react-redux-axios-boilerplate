// import endpoint from "../config/endpoints";
import { AxiosRequestHandler } from "../utils/AxiosRequestHandler";
// const API_ENDPOINT = endpoint.USER_URL;
export function exampleServiceCall(request = "") {
  let data = {
    query: `
      query UserTypeQuery {
        roles {
          roleId
          roleName
          userType
          isActive
        }
      }
    `
  };
  let config = {
    headers: {
      "Content-Type": "application/json-patch+json",
      // Authorization: "Bearer " + request.payload.authToken
    }
  };

  return AxiosRequestHandler("GET", "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc", config);
}
