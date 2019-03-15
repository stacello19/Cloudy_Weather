let makeItRain = function() {
    
    let increment = 0;
    let inc =0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      let randoRiver = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //increment
      inc = randoRiver;
      increment += randoFiver;
      let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6'];
      let comboColor = (Math.floor(Math.random() * (5)));
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="top: 30px; left: ' + inc + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 2.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.' + randoHundo + 's; background:' + colorArray[comboColor] + '"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.9' + randoHundo + 's; background:' + colorArray[comboColor] + '"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 2.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.' + randoHundo + 's; background:' + colorArray[comboColor] + '"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 1.9' + randoHundo + 's; background:' + colorArray[comboColor] + '"></div></div>';
    }

    let parser = new DOMParser()
    let dropTest = parser.parseFromString(drops, "text/html");
    let backdropTest = parser.parseFromString(backDrops, "text/html");
    let drop= dropTest.firstChild;
    let backdrop= backdropTest.firstChild;
    let rainFront = document.querySelector(".front-row");
    let rainBack = document.querySelector(".back-row");

    rainFront.appendChild(drop);
    rainBack.appendChild(backdrop);
  }
  makeItRain();

