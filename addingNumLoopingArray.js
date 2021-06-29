const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition =  function(moves) {
  let finalSpot = [0, 0]
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'east') {
      finalSpot[0] += 1;
    } else if (moves[i] === 'west') {
      finalSpot[0] -= 1;
    } else if (moves[i] === 'north') {
      finalSpot[1] += 1;
    } else if (moves[i] === 'south') {
      finalSpot[1] -= 1;
    }
  }
  return finalSpot 
}


console.log(finalPosition(moves));