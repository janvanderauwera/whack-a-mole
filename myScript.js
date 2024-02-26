function wackamole(){
    let holes = document.querySelectorAll(".hole");
    let mole = document.querySelector (".mole");
    const timeLeft = document.querySelector(".time-left");
    const score = document.querySelector(".score");
    const endGame = document.querySelector(".endGame");
    let result = 0;
    let chosenHole;
    let timer = 60;
    const replayBtn = document.querySelector(".endBtn");
    let scream = document.querySelector(".scream");
    
    
    replayBtn.addEventListener("click", ()=>{
    
      endGame.classList.add("hidden");
      wackamole();
    
    });
    
    function randomHole(){
    
      holes.forEach((hole)=>{
        hole.classList.remove("mole");
        hole.classList.remove("hamer");
        
    });
    
        chosenHole = holes[Math.floor(Math.random()*holes.length)];
        chosenHole.classList.add("mole");
    
    holes.forEach((hole)=>{
      hole.addEventListener("click", eventHandler)
    });
    
    
    
      function eventHandler(event) {
      
        holes.forEach((hole)=>{
          hole.removeEventListener("click", eventHandler)
        });
    
    let hole = event.currentTarget;
     if (chosenHole.id == hole.id){
      scream.pause();
      scream.currentTime =0;
      scream.play();
        chosenHole.classList.remove("mole");
        chosenHole.classList.add("hamer");
        result +=1;
        score.textContent = result;
       
    
    
     }
    
    
    
    
    }
    }
    
    
     
    
    
    
    function moveMole(){
      let timerId =  null;
      
      timerId = setInterval(()=>{
        if (timer==0){
          clearInterval(timerId);
    
        }else{
          
          randomHole();
    
        }
    
    
    
    
          
          
      },900)
    
    }
    
    moveMole();
    
    
    function countDown(){
     
      let timerId =  null;
      
      timerId = setInterval(()=>{
    
        if (timer==0){
          clearInterval(timerId);
          holes.forEach((hole)=>{
            hole.classList.remove("mole");
            hole.classList.remove("hamer");
            endGame.classList.remove("hidden");
            
        });
    
        }else{
          timer = timer-1;
          timeLeft.textContent = timer;
    
    
        }
    
       
    
          
          
      },1000)
    
    }
    
    countDown();
    
  
  }
  
  wackamole();
  
  
  