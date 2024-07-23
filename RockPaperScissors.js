const rps = (p1, p2) => {
    // if(p1 === "scissors" & p2 === "paper"){
    //   return "Player 1 won!";
    // }
    // if(p1 === "rock" & p2 === "scissors"){
    //   return "Player 1 won!";
    // }
    //  if(p1 === "paper" & p2 === "rock"){
    //   return "Player 1 won!";
    // }
    
    // if(p1 === "scissors" & p2 === "rock"){
    //   return "Player 2 won!";
    // }
    // if(p1 === "paper" & p2 === "scissors"){
    //   return "Player 2 won!";
    // }
    // if(p1 === "rock" & p2 === "paper"){
    //   return "Player 2 won!";
    // }
    // if(p1 === p2){
    //   return "Draw!";
    //  }
    // Rock (pierre) bat Scissors (ciseaux) : La pierre brise les ciseaux.
    // Scissors (ciseaux) bat Paper (papier) : Les ciseaux coupent le papier.
    // Paper (papier) bat Rock (pierre) : Le papier enveloppe la pierre.
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
      };
    
      if (p1 === p2) {
        return "Draw!";
      }
    // console.log(rules[p1]);
      if (rules[p1] === p2) {
        return "Player 1 won!";
      } else {
        return "Player 2 won!";
      }
  };
// console.log(rps('rock', 'scissors'));