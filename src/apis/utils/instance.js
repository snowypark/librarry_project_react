import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: "bearer " +  localStorage.getItem("AccessToken")
    }

});


export default instance;