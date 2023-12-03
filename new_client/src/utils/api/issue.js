import axios from "axios";
import Cookies from "universal-cookie";

// issue api
const cookies = new Cookies(null, { path: "/" });
const apiIssue = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/issue`,

});

apiIssue.interceptors.request.use(
  (config) => {
    const token = cookies.get("token");
    console.log("Token:", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("Token is undefined or not present.");
    }

    console.log("Request Headers:", config.headers);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


apiIssue.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // check if the error is 401 (unauthorized) then remove the token from the cookies
    if (error.response.status === 401) {
      cookies.remove("token");
      console.log(error);
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export const issueList = async () => {
  return await apiIssue.get("/");
};
