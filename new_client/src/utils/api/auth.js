import axios from "axios";
import Cookies from "universal-cookie";

// METHOD 2: Using axios.create
// auth api
const cookies = new Cookies(null, { path: "/" });
const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json', // Set the Content-Type header
  },
});

//for repeated step, execute dulu sebelum run axios
apiAuth.interceptors.response.use(
  (response) => {
    // check if there any token in the response insert it in the cookies
    const token = response.data.token;
    
    if (token) {
      cookies.set("token", token);
      console.log(token);
    }
    return response;
  },
  (error) => {
      // Handle specific error cases if needed
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized error:", error);
        // Handle unauthorized error, e.g., redirect to login
      } else {
        console.error("API request error:", error);
      }
  }
);

export const apiRegister = async (data) => {
  return await apiAuth.post("/register", data);
};

export const apiLogin = async (data) => {
  return await apiAuth.post("/login", data);
};
