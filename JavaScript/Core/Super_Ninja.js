class Ninja{
    // MEMBER VARIABLES
    // CONSTRUCTOR
    constructor(name, health){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }
    // OTHER METHODS
    sayName(){
        console.log("This ninja's name is " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
    }

    drinkSake(){
        this.health += 10;
    }
}

// const newNinja = new Ninja("Scorpion", 100);

// newNinja.sayName();
// newNinja.showStats();
// newNinja.drinkSake();
// newNinja.showStats();


class Sensei extends Ninja{
    // MEMBER VARIABLES
    // CONSTRUCTOR
    constructor(name, health){
        super(name, health);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    // OTHER METHODS
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake();
    }
}

const newSensei = new Sensei("Grandmaster Sub-Zero", 500);
newSensei.showStats();
newSensei.speakWisdom();
newSensei.showStats();
