var express = require("express")
var bodyParser = require("body-parser")
var passport = require("passport")
var LocalStratergy = require("passport-local")
var mongoose = require("mongoose")
var flash =  require("connect-flash")
var app = express()
var methodOverride = require("method-override")
var ejs = require("ejs")

mongoose.connect("mongodb://localhost:27017/abhinavProject" ,  { useUnifiedTopology: true,useNewUrlParser : true })

var companySchema = require("./models/companySchema")
var Company = mongoose.model("Company",companySchema)
var govtSchema = require("./models/govtSchema")
var Govt = mongoose.model("Govt",govtSchema)
var userSchema = require("./models/userSchema")
var User =  mongoose.model("User",userSchema)

var companySignup = require('./models/Company/signup')
var companyUpdate = require("./models/Company/update")

var govtSignup = require("./models/govt/signup")
var govtUpdate = require("./models/govt/update")

var userSignup = require("./models/User/signup")
var userUpdate = require("./models/User/update")

app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(methodOverride("_method"));

app.use(require("express-session")({
    resave : false, saveUninitialized : false , secret : "This is water project"
}))

app.use(flash());
app.use(function(req,res,next){
    res.locals.error = req.flash("error")
    res.locals.success = req.flash("success")
    next();
})

app.use(passport.initialize())
app.use(passport.session())

passport.use("companyLocal",new LocalStratergy(Company.authenticate()))
passport.serializeUser(Company.serializeUser())
passport.deserializeUser(Company.deserializeUser())

passport.use("govtLocal",new LocalStratergy(Govt.authenticate()))
passport.serializeUser(Govt.serializeUser())
passport.deserializeUser(Govt.deserializeUser())

passport.use("userLocal",new LocalStratergy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//company section

app.get("/",(req,res)=>{
    res.render("sign-up")
})

app.put("/updateCompanyData-:id",isLoggedIn,companyUpdate)

app.post("/companySignup",companySignup)

app.get("/companySignin",(req,res)=>{
    res.render("sign-in")
})

app.post("/companySignin",passport.authenticate("companyLocal",{
    failureRedirect : "/wrongCredentials"
}), isLoggedIn ,function(req,res){
    req.flash("success","WELCOME BACK , " + req.user['username'])
    res.redirect("/index")
})

app.get("/index",isLoggedIn,(req,res)=>{
    res.render("index", { company : req.user })
})

// govt section

app.get("/govtSignup",(req,res)=>{
    res.render("govtSignup")
})

app.post("/govtSignup",govtSignup)

app.get("/govtSignin",(req,res)=>{
    res.render("govtSignin")
})

app.post("/govtSignin",passport.authenticate("govtLocal",{
    failureRedirect : "/wrongCredentialsGovt",
    }), isGovtLoggedIn, (req,res) => {
        req.flash("success","WELCOME BACK , " + req.user['username'])
        res.render("govtIndex", { govt : req.user })
    }
)

app.put("/govtUpdate-:id",govtUpdate)

app.get("/govtIndex",isGovtLoggedIn,(req,res)=>{
    res.render("govtIndex", { govt : req.user })
})

app.get("/govtLogout",(req,res)=>{
    req.logout();
    res.redirect('/govtSignup');
})

app.get("/wrongCredentialsGovt",(req,res)=>{
    req.flash("error","USERNAME OR PASSWORD IS WRONG")
    res.redirect("/govtSignin")
})

function isGovtLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash("error","LOG IN TO CONTINUE")
        res.redirect("/govtSignin")
    }
}

app.get("/wrongCredentials",function(req,res){
    req.flash("error","USERNAME OR PASSWORD IS WRONG")
    res.redirect("/signin")
})

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        req.flash("error","LOG IN TO CONTINUEe")
        res.redirect("/companySignin")
    }
}

// user section


app.get("/userSignup",(req,res)=>{
    res.render("userSignup")
})

app.post("/userSignup",userSignup)

app.get("/userSignin",(req,res)=>{
    res.render("userSignin")
})

app.post("/userSignin",passport.authenticate("userLocal",{
    failureRedirect : "/wrongCredentialsUser",
    }), isUserLoggedIn, (req,res) => {
        req.flash("success","WELCOME BACK , " + req.user['username'])
        res.render("userIndex", { user : req.user })
    }
)

app.put("/userUpdate-:id",userUpdate)

app.get("/userIndex",isUserLoggedIn,(req,res)=>{
    res.render("userIndex", { user : req.user })
})

app.get("/userLogout",(req,res)=>{
    req.logout();
    res.redirect('/userSignup');
})

app.get("/wrongCredentialsUser",(req,res)=>{
    req.flash("error","USERNAME OR PASSWORD IS WRONG")
    res.redirect("/userSignin")
})

function isUserLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash("error","LOG IN TO CONTINUE")
        res.redirect("/userSignin")
    }
}

app.listen(4000,()=>{
    console.log("server at 4000")
})