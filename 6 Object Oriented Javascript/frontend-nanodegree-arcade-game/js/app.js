// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // TODO: Set the Enemy initial location
    //this.render(this.sprite, 0, 0);

    // TODO: Set the Enemy speed

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // TODO: Update the Enemy location
    this.x = 100*dt;
    this.y = 10*dt;
    // TODO: Handle collision with the Player
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
    // appropriate image in the image folder (use 
    // the code from the Enemy function as an example on how to do that)
    this.sprite = 'images/char-boy.png';
    this.x = 10;
    this.y = 20;

    // Set the Player initial location
    var posx = 0;
    var posy = 0;
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
            posx=posx-10;
            break;
        }
            case 'up': 
        {
            posy=posy+10;
            break;
        }
        case 'right': 
        {
            posx=posx+10;
            break;
        }
        case 'down': 
        {
            posy=posy-10;
            break;
        } 
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(),new Enemy(),new Enemy()];
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