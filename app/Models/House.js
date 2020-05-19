export default class House {

    constructor(data) {
        console.log("Hello from Model");
        this.id = data.id
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.price = data.price
        this.imgURL = data.imgURL
        this.description = data.description
        this.levels = data.levels
    }

    get Template() {
        return
    }
}
