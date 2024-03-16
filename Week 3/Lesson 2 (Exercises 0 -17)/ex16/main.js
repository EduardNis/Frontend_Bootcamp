
let userPass = prompt("Input your password, please: ")



function checkPassSafetyIF(pass){
    if (pass.length > 7) {
        console.log("Your password is STRONG")
    } else {
        console.log("Your password is WEEK")
    }

}


function checkPassSafetyTernary(pass){
    pass.length > 7 ? console.log("Your password is STRONG") : console.log("Your password is WEEK")
}


function checkPassSafetyAdvanced(pass){
    let userPassword = pass
    let userPasswordLower = pass.toLowerCase()

    pass.length < 7 ? console.log("Your password is WEEK") 
    : pass.length == 7 ? console.log("Your password is STRONG") 
    : pass.length > 7 && userPassword != userPasswordLower ? console.log("Your password is VERY STRONG") 
    : console.log("Your password is STRONG")
}


checkPassSafetyIF(userPass)
checkPassSafetyTernary(userPass)
checkPassSafetyAdvanced(userPass)

