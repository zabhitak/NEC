var mongoose = require("mongoose")
var GovtSchema = require("../govtSchema")
var Govt = mongoose.model("Govt",GovtSchema)

signup = (req,res)=>{
    Govt.findOne({ email : req.body.email }, (err,foundOne) => {
        if(err){
            console.log(err)
            req.flash("error","Unexpected error occurs!!!")
            res.redirect("/govtSignup")
        }else{
            if(foundOne != undefined){
                req.flash("error","Email already taken!!!")
                res.redirect("/govtSignup")
            }else{
                Govt.findOne({ username : req.body.name }, (err,foundSameName) => {
                    if(err){
                        console.log(err)
                        req.flash("error","Unexpected error occurs!!!")
                        res.redirect("/govtSignup")
                    }else{
                        if(foundSameName != undefined){
                            req.flash("error","Name already taken!!!")
                            res.redirect("/govtSignup")
                        }else{
                            Govt.register( {
                                username : req.body.name,email : req.body.email,companies : 0,
                                products : 0,customers : 0,waterSaved : 0,hospitalStaff : [],
                                recentProjects : [],hospitalServey : [],customerSatisfactions : [],
                                companiesLists : [],customerSatisfactionsNum : 0,customerSatisfactionsRating : 0
                            }, req.body.password , (err , newGovt) => {
                                if(err){
                                    console.log(err)
                                    req.flash("error","Unexpected error occurs!!!")
                                    res.redirect("/govtSignup")
                                }else{
                                    req.flash("success",newGovt['username'] + " signin to continue")
                                    res.redirect("govtSignin")
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