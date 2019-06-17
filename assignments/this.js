/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* - Window binding, refers to window object.
* - Implicit binding refers to objects on the left of the dot.
* - Explicit binding, when using .apply to define 'this' keyword.
* - New Binding, creating a object using a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
 console.log(this);
}
console.log(windowBinding());

// Principle 2

// code example for Implicit Binding

const theObject= {
    jumpShot: 'Buckets',
    shoot: function(){
        console.log(`${this.jumpShot}, and that's game.`)
        console.log(this);
    }
}

theObject.shoot();

// Principle 3

// code example for New Binding

function Nfl_Player(bears){
    this.play = 'Hail Mary! GO LONG!! ';
    this.bears = bears;
    this.play_player = function(){
        console.log(this.play + this.bears);
        console.log(this);
    }
}

const wr = new Nfl_Player ('WideReceiver');
const te = new Nfl_Player ('Tight-End');

wr.play_player();
te.play_player();

// Principle 4

// code example for Explicit Binding