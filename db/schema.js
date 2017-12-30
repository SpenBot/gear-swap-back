// DEPENDENCIES //

// connect to database //
const mongoose = require('./connection.js')

// CREATING THE SCHEMA //
const Schema = mongoose.Schema

const UserSchema = new Schema({
  "username": String,
  "zipcode": Number,
  "password": String,
  "photo_url": String,
  "inventory": []
})

// EXPORT MODULE //

// export schemas //
module.exports = {
  UserSchema
}
