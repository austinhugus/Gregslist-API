import House from "../Models/House.js";
import _store from "../store.js";


// @ts-ignore
let _api = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/houses',
    timeout: 15000
})


class HouseService {



}

console.log("hello from service");
const HOUSESERVICE = new HouseService();
export default HOUSESERVICE;
