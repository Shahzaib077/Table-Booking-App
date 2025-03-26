import axios from "axios";

const api = axios.create({ 
    baseURL:'https://dummyjson.com',
    // headers: {
    //     'x-rapidapi-key': 'd49e0cc171mshfeee89888e87f38p1a6bc2jsn576dba9fa494',
    //   },

})

export const getMenuData = () => {
    return api.get("/recipes")
  };