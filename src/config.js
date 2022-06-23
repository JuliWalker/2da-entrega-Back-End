import 'dotenv/config'
import express from 'express'

export const options = {
    mongoDB:{
        URL:DB_MONGO,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    mariaDB:{
        client:'mysql',
        connection:{
            host:'localhost',
            user:'root',
            password: process.env.DB_PASSWORD,
            database:'eccomerce'
        },
        pool:{min:0,max:15}
    },
    sqlite:{
        client:"sqlite3",
        connection:{
            filename: "./db.sqlite"
        },
        useNullAsDefault: true
    }
}