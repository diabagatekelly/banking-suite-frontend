import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "https://localhost:8000/users";

// class UserApi {
     async function RegisterFunction(data) {
            console.log('register running')
            const res = await axios.post(`${BASE_URL}/register`, { ...data } );
            console.log(res)
            return res;
    }

    async function LoginFunction(data) {
            console.log('login running')
            const res = await axios.post(`${BASE_URL}/login`, { ...data } );
            return res;
    }

    // function LogoutFunction() {
    //     return function (dispatch) {
    //         dispatch(logout())
    //     }
    // }

    // static async request(endpoint, params = {}, verb = "get") {
  
    //   let _token = localStorage.getItem(TOKEN_STORAGE_ID);
  
    //   console.debug("API Call:", endpoint, params, verb);
  
    //   let q;
  
    //   if (verb === "get") {
    //     q = axios.get(
    //       `${BASE_URL}/${endpoint}`, { params: { _token, ...params } });
    //   } else if (verb === "post") {
    //     q = axios.post(
    //       `${BASE_URL}/${endpoint}`, { _token, ...params });
    //   } else if (verb === "patch") {
    //     q = axios.patch(
    //       `${BASE_URL}/${endpoint}`, { _token, ...params });
    //   }
  
    //   try {
    //     return (await q).data;
    //   } catch (err) {
    //     console.error("API Error:", err.response);
    //     let message = err.response.data.message;
    //     throw Array.isArray(message) ? message : [message];
    //   }
    // }
  
    // static async getCompanies(search) {
    //   let res = await this.request("companies", { search });
    //   return res.companies;
    // }
  
    // static async getCompany(handle) {
    //   let res = await this.request(`companies/${handle}`);
    //   return res.company;
    // }
  
    // static async getJobs(search) {
    //   let res = await this.request("jobs", { search });
    //   return res.jobs;
    // }
  
    // static async applyToJob(id) {
    //   let res = await this.request(`jobs/${id}/apply`, {}, "post");
    //   return res.message;
    // }
  
    // static async login(data) {
    //   let res = await this.request(`login`, data, "post");
    //   return res.token;
    // }
  
    // static async register(data) {
    //   let res = await this.request(`users`, data, "post");
    //   return res.token;
    // }
  
    // static async getCurrentUser(username) {
    //   let res = await this.request(`users/${username}`);
    //   return res.user;
    // }
  
    // static async saveProfile(username, data) {
    //   let res = await this.request(`users/${username}`, data, "patch");
    //   return res.user;
    // }
//   }
  
  
 export {RegisterFunction, LoginFunction}
  