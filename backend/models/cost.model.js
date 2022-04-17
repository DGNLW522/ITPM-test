const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const costSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    urineTest: {
        type: Number,
    },
    Fullbloodcount: {
        type: Number,
    },
    Ths: {
        type: Number
    },
    Cholestarol: {
        type: Number
    },
    Uricacid: {
        type: Number
    },
    Pcr: {
        type: Number
    },
    Antigen: {
        type: Number
    },
    totalCost: {
        type: Number
    }
}, {
    timestamps: true,
})

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost;