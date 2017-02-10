// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

var tomagotchi = {
  name: "Coleman Howes",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  isHappy: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  eat: function(){
    this.hunger -= 3;
     hungerMeter.innerHTML = "Hunger Meter: " + tomagotchi.hunger
        if(this.hungerValue += 11){
        this.currentForm = "dead";
    }
    this.happiness += 1;
  },
  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Mountain Dew";
    }else if(this.age <= 15){
      this.currentForm = "Monster Energy";
    }
  },
  gainAge: function(){
    this.age += 5;
    this.checkDeathByAging();
    this.checkMorph();
  },
  checkDeathByAging: function(){
    if(this.age > 15){
      this.die();
    }
  },

  isAsleep: function(){
    this.isSleeping = true
    this.happiness += 1
    console.log("ZzzZZZzzz");
  },

  wakeUp: function(){
    this.isSleeping = false
    this.happiness += 1
    console.log("a suh dude");
  },

    happiness: function(){
    if(this.isHappy <= 5){
      console.log("sad");
    }else if(this.isHappy > 5){
      console.log("happy");
           happinessMeter.innerHTML = "Happiness Meter: " + tomagotchi.isHappy

    }
  },

  die: function(){
    this.life = false;
    console.log("RIP " + this.name + " is Dead");
    if(this.happiness === 0){
      this.currentForm = "dead"
      console.log(name + " is dead from a meme shortage");
    }else if(this.age <= 15)
      console.log(name + " is dead AF");
      this.currentForm = "dead"
    }
  };

var feed = document.getElementById("feedbtn");
var hungerMeter = document.getElementsByTagName("h2")[0];

  feed.addEventListener('click', function(){
    tomagotchi.eat();
  });

// function updateFrame(){

var i = 1;
  setInterval(function(){
    var firstDiv = document.getElementById(i);
    if (i % 4 === 0){
      i = 1;
    }else{
      i += 1;
    }
    var secondDiv = document.getElementById(i);
      firstDiv.classList.add("hidden");
    secondDiv.classList.remove("hidden");

  }, 1000)

////function to evolve////add a label for happiness//
var  happiness = document.getElementById("happinessbtn");
var happinessMeter = document.getElementsByTagName("h2")[1];

happiness.addEventListener('click', function(){
  tomagotchi.happiness();
});

