import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getGreetings() {
    return axios.get(API_URL + "greeting", { headers: authHeader() });
  }
  
}

export default new UserService();
