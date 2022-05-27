class Rabbit {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
 speak(line) {
 console.log(`The ${this.color} ${this.type} rabbit says '${line}'`);
 } }
 let killerRabbit = new Rabbit("killer", "blue"); 
 let badRabbit = new Rabbit("bad", "red");

 killerRabbit.speak('hidyho');

 let object = new class { getWord() { return "hello"; } }; 
 console.log(object.getWord());
 
 Rabbit.prototype.teeth = "small"; 
 console.log(killerRabbit.color);

 killerRabbit.teeth = "long, sharp, and bloody"; 
 console.log(killerRabbit.teeth);
 console.log(badRabbit.teeth);

 Rabbit.prototype.toString = function() { return `a ${this.type} rabbit`;
};
console.log(String(badRabbit)); // → a black rabbit