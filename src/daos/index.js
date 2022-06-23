import dotenv from 'dotenv'
import MongoDBProducts from './products/mongoDBProducts.js'
dotenv.config()

export let productsDao = async function(){
    switch (process.env.DB_PRODUCTS_NAME) {
        case "mongoDB":
            const {MongoDBProducts} = await import('./products/mongoDBProducts.js')
            return new MongoDBProducts()
    
        default:
            console.log("switch de databases para products en default")
            break;
    }
}

export let cartsDao = async function(){
    switch (process.env.DB_CARTS_NAME) {
        case "mongoDB":
            const {MongoDBCarts} = await import('./carts/mongoDBCarts.js')
            return new MongoDBCarts()
    
        default:
            console.log("switch de databases para carts en default")
            break;
    }
}