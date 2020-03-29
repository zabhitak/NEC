var mongoose = require("mongoose")
var UserSchema = require("../userSchema")
var User = mongoose.model("User",UserSchema)

signup = (req,res)=>{
    User.findOne({ email : req.body.email }, (err,foundOne) => {
        if(err){
            console.log(err)
            req.flash("error","Unexpected error occurs!!!")
            res.redirect("/userSignup")
        }else{
            if(foundOne != undefined){
                req.flash("error","Email already taken!!!")
                res.redirect("/userSignup")
            }else{
                User.findOne({ username : req.body.name }, (err,foundSameName) => {
                    if(err){
                        console.log(err)
                        req.flash("error","Unexpected error occurs!!!")
                        res.redirect("/userSignup")
                    }else{
                        if(foundSameName != undefined){
                            req.flash("error","Name already taken!!!")
                            res.redirect("/userSignup")
                        }else{
                            User.register( {
                                username : req.body.name,email : req.body.email,age : 1,location : "",
                                image : "https://images-na.ssl-images-amazon.com/images/I/713dMHIWb6L._SX355_.jpg",
                                weight : 1,height : "10 cm",goalKG : "",walkedSteps : 0,goalSteps : 0,
                                burnedKcal : 0,
                                goalKcal : 0,
                                walkingExercise : "",
                                playing : "",
                                streching : "",
                                physicalActivities : {
                                    exercises : "",
                                    burned : "",
                                    spend : "",
                                    advantage : "",
                                },
                                heartRate : "",
                                waterBalance : "",
                                upcomingCheckups : [],
                                docterList : [],
                                yearCheckups : []
                            }, req.body.password , (err , newUser) => {
                                if(err){
                                    console.log(err)
                                    req.flash("error","Unexpected error occurs!!!")
                                    res.redirect("/userSignup")
                                }else{
                                    req.flash("success",newUser['username'] + " signin to continue")
                                    res.redirect("/userSignin")
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