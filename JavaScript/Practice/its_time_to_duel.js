class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit){
            console.log(this.text);
            if(this.stat == "resilience"){
                target.res += this.magnitude;
            }
            if(this.stat == "power"){
                target.power += this.magnitude;
            }
        } else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

// UNIT CARDS
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

// EFFECT CARDS
const effect1 = new Effect("Hard Algorith", 2, "Increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

// ~~~PLAY~~~

// TURN 1
console.log("-----TURN 1-----");
effect1.play(unit1);
console.log(unit1.res);

// TURN 2
console.log("-----TURN 2-----");
effect2.play(unit1);
console.log(unit1.res);

// TURN 3
console.log("-----TURN 3-----");
effect3.play(unit1);
console.log(unit1.power);
unit1.attack(unit2);
console.log("Unit 2's res is now " + unit2.res);
