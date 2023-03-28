
function createVampire(name,pet){
  vampire = {
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
 }
 return vampire
}

function encounterDeliciousVictim(){
  if (vampire.thirsty === true){
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return 'No thanks, I am too full.'
  }
}

function drink(){

  vampire.ouncesDrank += 10
  if (vampire.ouncesDrank > 49){
    vampire.thirsty = false
    vampire.ouncesDrank = 50

  } 

  return vampire
}

function inquirePlace(locations,location){
var response = `No, I have never been to ${location}.`
  for (i = 0; i < locations.length;i++){
if (locations[i] === location){
  var response = `Yes, I have spent some time in New Orleans.`
   } 
  }
  return response
}

function findBatLovers(vampires){
  var batLovers = [];
for (i = 0; i < vampires.length; i++){
  if(vampires[i].pet === 'bat'){
    batLovers.push(vampires[i].name)
  }
 } 
 return batLovers
}

module.exports = {
   createVampire, 
   drink, 
  findBatLovers, 
 encounterDeliciousVictim, 
  inquirePlace
}