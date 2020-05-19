import _houseService from "../Services/HousesService.js";
import _store from "../store.js";

//Private
function _draw() {
    let values = _store.State.values;
    console.log(values);
}


//Public
export default class HousesController {
    constructor() {
        console.log("Hello from Controller");
        _store.subscribe("values", _draw);
    }
}