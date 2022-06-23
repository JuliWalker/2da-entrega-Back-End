import MongoClass from "../../containers/mongoClass"

class MongoDBProducts extends MongoClass{
    constructor(){
        super('products',{
            nombre: { type: String, required: true},
        })
    }
}

export default MongoDBProducts