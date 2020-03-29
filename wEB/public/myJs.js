var p1 = $("#repair2").text()
var i1 = p1.indexOf("%")
p1 = p1.slice(0,i1)

var width2 = Number( p1 )
repair()
function repair(){
    width1 = 100 - width2
    width2 = width2 + "%"
    width1 = width1 + "%"
    $("#repair1").css("width",width2)
    $("#repair2").css("width",width1)
}

var p2 = $("#checkUp2").text()
var i2 = p2.indexOf("%")
p2 = p2.slice(0,i2)

var Width2 = Number( p2 )
checkUp()
function checkUp(){
    Width1 = 100 - Width2
    Width2 = Width2 + "%"
    Width1 = Width1 + "%"
    console.log(Width2 + " : " + Width1)
    $("#checkUp1").css("width",Width2)
    $("#checkUp2").css("width",Width1)
}