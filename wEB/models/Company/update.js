var mongoose = require("mongoose")
var companySchema = require("../companySchema")
var Company = mongoose.model("Company",companySchema)

var customerSatisfaction = [
    {
        customerName : "User 1",resultPercentage : 80
    },{
        customerName : "User 2",resultPercentage : 82
    },{
        customerName : "User 3",resultPercentage : 83
    },{
        customerName : "User 4",resultPercentage : 84
    },{
        customerName : "User 5",resultPercentage : 85
    },{
        customerName : "User 6",resultPercentage : 86
    },{
        customerName : "User 7",resultPercentage : 87
    },{
        customerName : "User 8",resultPercentage : 88
    }
]

var installationOverview = [
    { stateName : "UP", resultPercentage : 11.2  },
    { stateName : "UK", resultPercentage : 10.2  },
    { stateName : "MP", resultPercentage : 11.1  },
    { stateName : "JK", resultPercentage : 12.2  },
    { stateName : "Raj", resultPercentage : 6.2  },
    { stateName : "Delhi", resultPercentage : 9.2  },
    { stateName : "Har", resultPercentage : 11.2  },
    { stateName : "HP", resultPercentage : 8.2  },
]

var productWiseRating = [
    { productName : "Product 1", rating : 85 },
    { productName : "Product 2", rating : 87 },
    { productName : "Product 3", rating : 89 },
    { productName : "Product 4", rating : 82 },
]

var lastServices = [
    { customerName : "Customer 8", serviceType : "Installation",date : "20/03/2020", place : "Pune",contactNo : "+91 9987654321"  },
    { customerName : "Customer 2", serviceType : "Installation",date : "21/03/2020", place : "Delhi",contactNo : "+91 9987654321"  },
    { customerName : "Customer 3", serviceType : "Servicing",date : "22/03/2020", place : "Indore",contactNo : "+91 9987654321"  },
    { customerName : "Customer 4", serviceType : "Check-up",date : "23/03/2020", place : "Wasseypur",contactNo : "+91 9987654321"  },
    { customerName : "Customer 5", serviceType : "Installation",date : "24/03/2020", place : "Lahore",contactNo : "+91 9987654321"  },
    { customerName : "Customer 6", serviceType : "Installation",date : "25/03/2020", place : "Pune",contactNo : "+91 9987654321"  },
    { customerName : "Customer 7", serviceType : "Servicing",date : "26/03/2020", place : "Kanpur",contactNo : "+91 9987654321"  },
]

var onsiteEngineers = [
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 1", type : "Engineer"
    },
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 2", type : "Engineer"
    },
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 3", type : "Surveyor"
    },
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 4", type : "Engineer"
    },
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 5", type : "Surveyor"
    },
    {  
         image : "https://lh3.googleusercontent.com/proxy/Fojk8jXHobgAwHTciPX-S9nkJANexQNha-QRyfCjJKtXG6FNAejvFS-nbx9kjNlA-uAzSbadiYGyuFjmx-Ab52xokKJ2xqk",
        name : "Engineer 6", type : "Engineer"
    },
]

var updateCompany = {
    waterSaved : "10 Lakh Liters",
    totalServicesGiven : "12345",totalRevenue : 1234560,productsInstalled : 3333,
    serviceRating : 4.69,servicesThisYear : 540,installationThisYear : 121,repair : "15%",
    checkUp : "95%",newProducts : 50,onsiteStaff : 298,customerSatisfaction : customerSatisfaction,
    installationOverview : installationOverview,productWiseRating : productWiseRating,
    lastServices : lastServices,onsiteEngineers : onsiteEngineers,
    tagline : "Paani ka docter",punchLine : "Best in Household Attachments and Sensor Network."
}

function update(req,res){
    Company.findById(req.params.id, (err,foundCompany) => {
        if(err){
            console.log(err)
            req.flash("error","Unexpected Error Occured!!!")
            res.redirect("/index")
        }else{
            if(!foundCompany){
                res.redirect("/")
            }else{
                foundCompany.waterSaved = updateCompany.waterSaved;foundCompany.totalServicesGiven = updateCompany.totalServicesGiven;
                foundCompany.totalRevenue = updateCompany.totalRevenue;foundCompany.productsInstalled = updateCompany.productsInstalled;
                foundCompany.serviceRating = updateCompany.serviceRating;foundCompany.servicesThisYear = updateCompany.servicesThisYear;
                foundCompany.installationThisYear = updateCompany.installationThisYear;foundCompany.repair = updateCompany.repair;
                foundCompany.checkUp = updateCompany.checkUp;foundCompany.newProducts = updateCompany.newProducts;
                foundCompany.onsiteStaff = updateCompany.onsiteStaff;foundCompany.onsiteStaff = updateCompany.onsiteStaff;
                foundCompany.customerSatisfaction = updateCompany.customerSatisfaction;foundCompany.installationOverview = updateCompany.installationOverview;
                foundCompany.productWiseRating = updateCompany.productWiseRating;foundCompany.lastServices = updateCompany.lastServices;
                foundCompany.tagline = updateCompany.tagline;
                foundCompany.punchLine = updateCompany.punchLine;
                // foundCompany.onsiteEngineers = updateCompany.onsiteEngineers;
                foundCompany.save((err,savedCompany)=>{
                    if(err){
                        console.log(err)
                        req.flash("error","Unexpected Error Occured!!!")
                        res.redirect("/index")
                    }else{
                        Company.findByIdAndUpdate(req.params.id,savedCompany, (err,updatedCompany) => {
                            if(err){
                                console.log(err)
                                req.flash("error","Unexpected Error Occured!!!")
                                res.redirect("/index")
                            }else{
                                req.flash("success","Date Updated Successfully!!!")
                                res.redirect("/index")
                            }
                        } )
                    }
                })
            }
        }
    } )
}

module.exports = update