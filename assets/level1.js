let donuts;
let donutLayer;
let player;
let controls;
let cursors;
let coinScore = 0;
let text;



class level1 extends Phaser.Scene{
  constructor () {
    super({key:"level1"});
  }


  preload(){
   this.load.image("bg2", "../assets/tilesets/bg2.png");
   this.load.image("spritesheetBush2", "../assets/tilesets/spritesheetBush2.png");
   this.load.image("donut", "../assets/tilesets/donut.png");
this.load.image("tiles_spritesheet", "../assets/tilesets/tiles_spritesheet.png");
   this.load.spritesheet("theHorse", "../assets/tilesets/theHorse.png", { frameWidth: 103, frameHeight: 62 });
   this.load.tilemapTiledJSON("liquor", "../assets/tilemaps/liquor.json");
    // Runs once, loads up assets like images and audio



  }

  create() {
    this.cameras.main.fadeIn(3000);

    let coinScore = 0;

    function collectCoin(player, coin){
        coin.destroy(coin.x, coin.y); // remove the tile/coin
        coinScore ++; // increment the score
        text.setText(`Donuts Total: ${coinScore}x`); // set the text to show the current score
        return false;
    }
/*
function walkingOnAir(){
  const theVelocity = player.body.velocity.clone();
  if(theVelocity.x === 0){
if(player.anims.play('right', true)){
  player.anims.play('turn', true);
}else if(player.anims.play('left', true)){
  player.anims.play('turnLeft', true);
}
  }
}
*/

    const map = this.make.tilemap({ key: "liquor" });


    // Runs once, after all assets in preload are loaded
  const tileset = map.addTilesetImage("bg2", "bg2");

  const tileset1 = map.addTilesetImage("tiles_spritesheet", "tiles_spritesheet");

  const tileset2 = map.addTilesetImage("spritesheetBush2", "spritesheetBush2");

  const tileset3 = map.addTilesetImage("donut", "donut");

  const sky = map.createStaticLayer("Tile Layer 1", tileset, 0, 0);

  const ground = map.createStaticLayer("Tile Layer 2", tileset1, 0, 0);

  const items = map.createStaticLayer("Tile Layer 3", tileset2, 0, 0);

  donutLayer = map.getObjectLayer('Tile Layer 4')['objects'];

  /*https://medium.com/@alizah.lalani/collecting-objects-in-phaser-3-platformer-games-using-tiled-4e9298cbfc85
  this is a link to a tutorial on how to setup your coin tiles or in my  case the donuts, as collectable.
  */
  donuts = this.physics.add.staticGroup();
  //here we go through each tile in the donutLayer, giving its x and y coordinates, and scaling it to the right size.
  donutLayer.forEach(function hey(object){
      let obj = donuts.create(object.x, object.y, "donut");
         obj.setScale(object.width/32, object.height/32);
         obj.setOrigin(0);
         obj.body.width = object.width;
         obj.body.height = object.height;
  });



  /*to limit the movement of the player and the camera..  works with the camera const below */

  this.physics.world.bounds.width = map.widthInPixels;
      this.physics.world.bounds.height = map.heightInPixels;

  //this makes sure to make the player collide with certain tiles defined inside tiled..
  ground.setCollisionByProperty({collides: true});

  items.setCollisionByProperty({collides: true});


  // The player and its settings
  player = this.physics.add.sprite(100, 400, 'theHorse');
  player.setFrame(9);

  this.physics.add.collider(player, ground);
  this.physics.add.overlap(player, donuts, collectCoin, null, this);
  let text = this.add.text(570, 70, `Donuts Total: ${coinScore}x`, {
        font: '22px Arvo',
        fill: 'black',
      });
      text.setScrollFactor(0);

  //  Player physics properties. Give the little guy a slight bounce.
  //player.setBounce(0.2);
  player.setCollideWorldBounds(true);


  const camera = this.cameras.main;
    camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  //  Our player animations, turning, walking left and walking right.
  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('theHorse', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'theHorse', frame: 9 } ],
      frameRate: 20
  });

  this.anims.create({
    key: 'turnLeft',
    frames: [ { key: 'theHorse', frame: 4 } ],
    frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('theHorse', { start: 5, end: 8}),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
    key: 'leftJump',
    frames: [ { key: 'theHorse', frame: 2 } ],
    frameRate: 20
  });

  this.anims.create({
    key: 'rightJump',
    frames: [ { key: 'theHorse', frame: 7 } ],
    frameRate: 20
  });

  function touching(){
    const prevVelocity = player.body.velocity.clone();
    if(prevVelocity > 0){
      player.anims.play('turn', true);
    }
    else if(prevVelocity < 0){
      player.anims.play('turnLeft', true);
    }

  }

  this.physics.add.collider(player, items);




  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();

this.input.keyboard.on("keyup", function(b){
  if(b.key == 'b'){
    this.scene.start('menu');
  }
}, this);

  }


  update(time, delta){





    const prevVelocity = player.body.velocity.clone();

    function walkingOnAir(){
      const theVelocity = player.body.velocity.clone();

      if(theVelocity.x === 0){
    if(prevVelocity.x > 0){
      player.anims.play('turn', true);
    }else if(prevVelocity.x < 0){
      player.anims.play('turnLeft', true);
    }
      }
    }


    if(cursors.left.isDown)
    {

        player.setVelocityX(-160);

        player.anims.play('left', true);

        if (!player.body.onFloor()){
          player.anims.play('leftJump', true);
        }
    }
    else if (cursors.right.isDown)
    {

        player.setVelocityX(160);

        player.anims.play('right', true);

        if(!player.body.onFloor()){
          player.anims.play('rightJump', true);
        }
    }

    else {

      player.setVelocityX(0);

      if(prevVelocity.x > 0){
        player.anims.play('turn', true);
      }else if(prevVelocity.x < 0){
        player.anims.play('turnLeft', true);
      }else if(!cursors.isDown && !player.body.onFloor() && prevVelocity.x > 0){
        player.anims.play('turn', true);
      }else if(!cursors.isDown && !player.body.onFloor() && prevVelocity.x < 0){
        player.anims.play('turnLeft', true);
      }
  }


    if (cursors.up.isDown && player.body.onFloor())
    {

        player.setVelocityY(-280);
    }

  }


}
