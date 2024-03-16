
let color = prompt("Input the color:")
let returnString = ""


function colorLightDark(color){
    
    switch(color = color.toLowerCase()){
        
        case ("yellow"):
            returnString = "Light color"
            break;
        case ("pink"):
            returnString = "Light color"
            break;
        case ("orange"):
            returnString = "Light color"
            break;
    

            
        case ("blue"):
            returnString = "Dark color"
            break;
        case ("purple"):
            returnString = "Dark color"
            break;
        case ("brown"):
            returnString = "Dark color"
            break;

        default:
            returnString = "Unknown color"
            break;
    }

    return returnString
}



console.log(colorLightDark(color))