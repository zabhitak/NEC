var mongoose = require("mongoose")
var UserSchema = require("../userSchema")
var User = mongoose.model("User",UserSchema)

var upcomingCheckups =  [
    {
        name : "Patient Checkup",
        vaccine : "ChickenPox Vaccine",
        date : "23 March 2020"
    }, {
        name : "Patient Admit",
        vaccine : "Injection of required vaccine",
        date : "23 March 2020"
    }, {
        name : "Treatment Starts",
        vaccine : "Vaccine time at 1 p.m",
        date : "23 March 2020"
    }, {
        name : "Patient Notification",
        vaccine : "Same notification is set on your keychain",
        date : "23 March 2020"
    },
]

var docterList = [
    {
        name : "Docter 1",
        contact : "+91 9987654321",
        diseaseExpert : "Fever"
    },{
        name : "Docter 2",
        contact : "+91 9987654321",
        diseaseExpert : "Vaccine"
    },{
        name : "Docter 3",
        contact : "+91 9987654321",
        diseaseExpert : "Legs"
    },{
        name : "Docter 4",
        contact : "+91 9987654321",
        diseaseExpert : "Eye"
    },
]

var yearCheckups = [
    {
        yearNum : "All",status : "",total : "32",taken : "18",left : "14"
    },{
        yearNum : "5",status : "",total : "6",taken : "0",left : "6"
    }, {
        yearNum : "4",status : "",total : "5",taken : "0",left : "5"
    },{
        yearNum : "3",status : "Good",total : "10",taken : "7",left : "3"
    }, {
        yearNum : "2",status : "Good",total : "6",taken : "6",left : "0"
    },{
        yearNum : "1",status : "Good",total : "5",taken : "5",left : "0"
    },
]

var updateUser = {
    age : 2.5,
    location : "Patiala",
    image : "images/user/25.jpg",
    weight : 22.8,
    height : "60cm",
    goalKG : "24kg",
    walkedSteps : 450,
    goalSteps : 600,
    burnedKcal : 325,
    goalKcal : 800,
    walkingExercise : 385,
    playing : 385,
    streching : 385,
    physicalActivities : {
        exercises : "Rocking & Swaying",
        burned : "35 kcal",
        spend : "45 m",
        advantage : "Baby learn where there body in space",
    },
    heartRate : "75 bpm",
    waterBalance : "1250 ml/ 2000 ml",
    upcomingCheckups : upcomingCheckups,
    docterList : docterList,
    yearCheckups : yearCheckups
}

function update(req,res){
    User.findById(req.params.id, (err,foundUser) => {
        if(err){
            console.log(err)
            req.flash("error","Unexpected Error Occured!!!")
            res.redirect("/userIndex")
        }else{
            if(!foundUser){
                res.redirect("/userSignup")
            }else{
                foundUser.age = updateUser.age; 
                foundUser.location = updateUser.location;
                foundUser.image = updateUser.image;
                foundUser.weight = updateUser.weight;
                foundUser.height = updateUser.height;
                foundUser.goalKG = updateUser.goalKG;
                foundUser.walkedSteps = updateUser.walkedSteps;
                foundUser.goalSteps = updateUser.goalSteps;
                foundUser.burnedKcal = updateUser.burnedKcal;
                foundUser.goalKcal = updateUser.goalKcal;
                foundUser.walkingExercise = updateUser.walkingExercise;
                foundUser.playing = updateUser.playing;
                foundUser.streching = updateUser.streching;
                foundUser.physicalActivities = updateUser.physicalActivities;
                foundUser.heartRate = updateUser.heartRate;
                foundUser.waterBalance = updateUser.waterBalance;
                foundUser.upcomingCheckups = updateUser.upcomingCheckups;
                foundUser.yearCheckups = updateUser.yearCheckups; 
                foundUser.docterList = updateUser.docterList;
                foundUser.save((err,savedUser)=>{
                    if(err){
                        console.log(err)
                        req.flash("error","Unexpected Error Occured!!!")
                        res.redirect("/userIndex")
                    }else{
                        User.findByIdAndUpdate(req.params.id,savedUser, (err,updatedUser) => {
                            if(err){
                                console.log(err)
                                req.flash("error","Unexpected Error Occured!!!")
                                res.redirect("/userIndex")
                            }else{
                                req.flash("success","Date Updated Successfully!!!")
                                res.redirect("/userIndex")
                            }
                        } )
                    }
                })
            }
        }
    } )
}

module.exports = update