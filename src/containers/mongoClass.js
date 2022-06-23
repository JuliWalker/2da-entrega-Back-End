import mongoose from "mongoose";
import options from "../config.js"

mongoose.connect(options.mongoDB.URL,options.mongoDB.options)

class MongoClass {

    constructor(collectionName,docSchema){
        this.collection = mongoose.model(collectionName,docSchema)
    }

    async getAll(){
        try {
            const all = await this.collection.find({})
            return all
        }
        catch (error) {
            throw new Error("error: ",error)
        }
    }

}

export default MongoClass