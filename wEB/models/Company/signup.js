var mongoose = require("mongoose")
var companySchema = require("../companySchema")
var Company = mongoose.model("Company",companySchema)

signup = (req,res)=>{
    Company.findOne({ email : req.body.email }, (err,foundOne) => {
        if(err){
            console.log(err)
            req.flash("error","Unexpected error occurs!!!")
            res.redirect("/")
        }else{
            if(foundOne != undefined){
                req.flash("error","Email already taken!!!")
                res.redirect("/")
            }else{
                Company.findOne({ username : req.body.name }, (err,foundSameName) => {
                    if(err){
                        console.log(err)
                        req.flash("error","Unexpected error occurs!!!")
                        res.redirect("/")
                    }else{
                        if(foundSameName != undefined){
                            req.flash("error","Name already taken!!!")
                            res.redirect("/")
                        }else{
                            Company.register( {
                                username : req.body.name,email : req.body.email,waterSaved : "0 Lakh Liters",
                                totalServicesGiven : "0",totalRevenue : 0,productsInstalled : 0,
                                serviceRating : 0,servicesThisYear : 0,installationThisYear : 0,repair : "0%",
                                checkUp : "0%",newProducts : 0,onsiteStaff : 0,customerSatisfaction : [],
                                installationOverview : [],productWiseRating : [],lastServices : [],onsiteEngineers : []
                            }, req.body.password , (err , newCompany) => {
                                if(err){
                                    console.log(err)
                                    req.flash("error","Unexpected error occurs!!!")
                                    res.redirect("/")
                                }else{
                                    req.flash("success",newCompany['username'] + " signin to continue")
                                    res.redirect("companySignin")
                                }
                            } )
                        }
                    }
                } )
            }
        }
    } )
}

module.exports = signup