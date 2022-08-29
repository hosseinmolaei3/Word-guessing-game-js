const p1_game = document.querySelector(".start");
    const p2_game = document.querySelector(".show");
    const p3_game = document.querySelector(".winpara");
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const Time = new Date();
    let wordArray = ["علی", "حسین", "حامد", "حمید", "حشمت"];
    let gameArea = false;
    let scarmble = "";
    let scarmbled = "";
    let score = 0;
    button.addEventListener("click", function () {
      p1_game.innerHTML = "game is start: ";
      startTime();
      if (!gameArea) {
        gameArea = true;
        input.style.display = "unset";
        button.innerHTML = "Guess";
        scarmble = creatword();
        scarmbled = randomarry(scarmble.split("")).join("");
        p2_game.innerHTML = scarmbled;
      } else {
        if (scarmble == input.value) {
          gameArea = false;
          score++;
          input.style.display = "none";
          p2_game.innerHTML = scarmble;
          button.innerHTML = "start";
          p3_game.innerHTML = "you win guess count: " + score;
          score = 0;
        } else {
          score++;
          p1_game.innerHTML = "Worng : " + scarmbled;
        }
      }
    });
    function creatword() //creat word
    {
      let indexarr = Math.floor(Math.random() * wordArray.length);
      let word = wordArray[indexarr];
      return word;
    }
    function randomarry(arr)//mack random word
    {
      for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
    //time
    function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }