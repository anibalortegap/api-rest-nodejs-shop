'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema

const productSchema = schema({
    name: String,
    price: { type: Number, defaul: 0 },
    currency: { type: String, enum: ['usd', 'eur', 'pesos'] },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    vendor: { type: String, enum: ['amazon', 'ebay', 'aliExpress'] },
    payment: { type: String, enum: ['tarjeta de credito', 'efectivo', 'pse'] },
    location: String,
    description: String
});

module.exports = mongoose.model('Product', productSchema);