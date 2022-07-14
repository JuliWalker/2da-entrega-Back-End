import MongoClass from "../../containers/mongoClass.js"

export class MongoDBUsers extends MongoClass {
    constructor() {
        super('users', {
           
            email: {
                type: String,
                required: true
            },
            nombre: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        });
    }

    async getByName(name) {
        try{
            const user = await this.collection.findOne( {nombre:name} )
            return user
        }catch(err){
            throw new Error(err)
        }
    }

}