const mongoose = require('mongoose')

const {Schema,model}=mongoose;

const geo = new Schema({
    type:{
        type:String,
        default:"point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

const bookSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required field']
    },
    rank:{
        type:String
    },
    available:{
        type:Boolean,
        default:false
    },
    geometry:{
        type:geo
    }
})

const book = new model ('book',bookSchema);
module.exports = book;
