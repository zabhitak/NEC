var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var govtSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    companies : Number,
    products : Number,
    customers : Number,
    waterSaved : Number,
    hospitalStaff : [
        {
            name : String,
            image : String,
            hospitalName : String,
            role : String
        }
    ],
    recentProjects : [
        {
            image : String,
            companyName : String,
            completionDate : String,
            task : String
        }
    ],
    hospitalServey : {
        todayIncome : Number,
        weekIncome : Number,
        monthIncome : Number,
        yearIncome : Number
    },
    customerSatisfactionsNum : Number ,
    customerSatisfactionsRating : Number ,
    customerSatisfactions : [
        {
            criteria : String,
            num : Number,
            percentage : String
        }
    ],
    companiesLists : [
        {
            companyName : String,
            contact : String,
            class : String
        }
    ],
})
govtSchema.plugin(passportLocalMongoose)
module.exports = govtSchema