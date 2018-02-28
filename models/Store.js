const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('slugs')

/* 
  - Schema name
    - Document
    - Document
    - Document
*/
const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name'
  },
  slug: String,
  descrition: {
    type: String,
    trim: true
  },
  tags: [String]
})

/* Pre
 Sebelum di save ke database, lakukan sesuatu
*/
storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next() // skip jika tidak ada prubahan pada 'name'
  }
  this.slug = slug(this.name) 
  next()
})

// Compile Schema To Models
const Store = mongoose.model('Store', storeSchema)

module.exports = Store
