

function drawTree (hight) {
    for (let i = 1; i <= hight; i++) {
        let result = "";
        for (let  f= i;  f< hight; f++) {
            result = result + " "
          
        }
      for (let j = 0; j < (1*i-1); j++) {
        
        result = result + "+ "
      }

      console.log(result)
    }
          
          
  } 

  var levels = prompt('How many levels high should be the tree?');
 


  //drawTree(levels);

  if(levels == 0) {
     console.log("nope 0, try another")
  }
  else if(levels == 1) {
      console.log("nope 1, try bigger")
  }
  else {
      console.log("ok, let's do this")
    drawTree(levels);
  }
  
 