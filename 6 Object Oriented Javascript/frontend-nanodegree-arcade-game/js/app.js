// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // TODO: Set the Enemy initial location
    var randNum = Math.floor((Math.random() * 3) + 1);
    //console.log(randNum);
    switch (randNum)
    {
        case 1: //top row
        {
            this.x = -100;
            this.y = 60;
            break;
        }
        case 2:
        {
            this.x = -100;
            this.y = 60+82;
            break;
        }
        case 3:
        {
            this.x = -100;
            this.y = 60+82+82;
            break;
        }
    }
   

    // TODO: Set the Enemy speed
    this.speed = Math.floor((Math.random() * 200) + 100);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   // console.log("enemy dt: " + dt);
    // TODO: Update the Enemy location
    this.x +=this.speed*dt;
    var anotherRanNum = Math.floor((Math.random() * 700) + 100);
    //console.log(anotherRanNum);
    if (this.x > anotherRanNum)
        {
            //console.log("index: " + index);
            //console.log("allEmenies 1: " + allEnemies);
            if (allEnemies.length < maxEnemies)
                allEnemies.push(new Enemy());
            //console.log("allEmenies after: " + allEnemies);
        }
        if (this.x > 700)
        {
            var index = allEnemies.indexOf(this);
            //console.log("index: " + index);
            //console.log("allEmenies 2: " + allEnemies);
            allEnemies[index] = new Enemy();
        }
    // TODO: Handle collision with the Player

    if ((this.x < player.x+xRange && this.x > player.x-xRange) && (this.y < player.y+yRange && this.y > player.y-yRange))
        player.reset();
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    // Load the image by setting this.sprite to the 
    // appropriate image in the image folder
    this.sprite = 'images/char-boy.png';
    
    // Set the Player initial location
    this.reset();
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 320+82;
}

// The update method for the Player (can be similar to the one for the Enemy)
Player.prototype.update = function(dt) {
    // TODO: Update the Player location

    // TODO: Handle collision with the Enemy
}

// The render method for the Player (use the code from the render method for the Enemy)
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// The handleInput method, which should receive user input, 
// allowedKeys (the key which was pressed) and move the player 
// according to that input. In particular:
// Left key should move the player to the left, 
// right key to the right, up should move the player up and down 
// should move the player down.
// Recall that the player cannot move off screen 
// (so you will need to check for that and handle appropriately).
// If the player reaches the water the game should be reset by 
// moving the player back to the initial location 
// (you can write a separate reset Player method to handle that).
Player.prototype.handleInput = function(key) {
    switch (key)
    {
        case 'left': 
        {
            if (this.x!=0)
                this.x-=100;
            break;
        }
            case 'up': 
        {
            this.y-=82;
            break;
        }
        case 'right': 
        {
            if ( this.x !=400)
                this.x+=100;
            break;
        }
        case 'down': 
        {
            if (this.y !=402)
            this.y+=82;
            break;
        } 
    }
    //console.log("x: " + this.x + ", y: " + this.y);
    if (this.y<74)
        {
            this.reset();
        }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var maxEnemies = 2;
   var xRange = 70;
    var yRange = 15;
var allEnemies = [new Enemy()];

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});