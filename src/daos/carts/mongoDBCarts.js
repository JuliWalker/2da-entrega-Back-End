import MongoClass from "../../containers/mongoClass"

class MongoDBCarts extends MongoClass{
    constructor(){
        super('carts',{
            nombre: { type: String, required: true},
        })
    }
}