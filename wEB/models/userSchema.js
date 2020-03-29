var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    age : Number,
    location : String,
    image : String,
    weight : Number,
    height : String,
    goalKG : String,
    walkedSteps : Number,
    goalSteps : Number,
    burnedKcal : Number,
    goalKcal : Number,
    walkingExercise : String,
    playing : String,
    streching : String,
    physicalActivities : {
        exercises : String,
        burned : String,
        spend : String,
        advantage : String,
    },
    heartRate : String,
    waterBalance : String,
    upcomingCheckups : [{
        name : String,
        vaccine : String,
        date : String
    }],
    docterList : [{
        name : String,
        contact : String,
        diseaseExpert : String
    }],
    yearCheckups : [{
        yearNum : String,
        status : String,
        total : String,
        taken : String,
        left : String
    }]
})
userSchema.plugin(passportLocalMongoose)
module.exports = userSchema