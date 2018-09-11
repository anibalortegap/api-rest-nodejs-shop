'use strict'

const mongoose = require('mongoose');
const bcript = require('bcrypt-nodejs');
const schema = mongoose.Schema;

const userSchema = schema({
    email: {},
    displayName: String,
    avatar: String,
    password: { type: String, select: false },
    signupDate: { type: Date, default: Data.now() },
    lastLogin: Date
    
});

userSchema.pre('save', (next) => {
    
})

module.exports = mongoose.model('User', userSchema);
