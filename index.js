function scuberGreetingForFeet(num){
  if(num < 400){
    return 'This one is on me!'
  }

  else if(num > 400 && num < 2000){
    return 'That will be twenty bucks.'
  }

  else if(num > 2000 && num < 2500){
    return 'I will gladly take your thirty bucks.'
  }

  else if(num > 2500){
    return 'No can do.'
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(generosity){
  // Write your code here!
  switch(generosity){
    case "generous":
      return "Thank you so much."
      break
    case "not as generous":
      return "Thank you."
      break
    case "thanks for everything":
      return "Bye."
      break
  }
}