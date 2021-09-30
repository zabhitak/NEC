var middleware = {};
middleware.isLoggedIn =   function(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }else{
        req.flash("error","LOG IN TO CONTINUE")
        res.redirect("/sessionExpired")
    }
}
module.exports = middleware