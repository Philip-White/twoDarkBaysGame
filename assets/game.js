var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-app',
    autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 800,
  height: 600,
},
roundPixels: true,
pixelArt: true,
  physics: {
    default: 'arcade',
    arcade:{
      gravity: {y : 350}
    }
  },
  scene: [ menu, level1 ]

};

var game = new Phaser.Game(config);
