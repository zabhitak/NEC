var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var companySchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    waterSaved : String,
    totalServicesGiven : String,
    totalRevenue : Number,
    productsInstalled : Number,
    serviceRating : Number,
    servicesThisYear : Number,
    installationThisYear : Number,
    repair : String,
    checkUp : String,
    newProducts : Number,
    onsiteStaff : Number,
    customerSatisfaction : [
        {
            customerName : String,
            resultPercentage : Number
        }
    ],
    installationOverview : [
        {
            stateName : String,
            resultPercentage : Number
        }
    ],
    productWiseRating : [
        {
            productName : String,
            rating : Number
        }
    ],
    lastServices : [
        {
            customerName : String,
            serviceType : String,
            date : String,
            place : String,
            contactNo : String
        }
    ],
    onsiteEngineers : [
        {
            image : String,
            name : String,
            type : String
        }
    ]
})
companySchema.plugin(passportLocalMongoose)
module.exports = companySchema