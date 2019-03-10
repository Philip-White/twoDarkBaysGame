

class menu extends Phaser.Scene{
  constructor () {
    super({key:"menu"});
  }

  preload(){

    var progressBar = this.add.graphics();
              var progressBox = this.add.graphics();
              progressBox.fillStyle(0x222222, 0.8);
              progressBox.fillRect(240, 270, 320, 50);

              var width = this.cameras.main.width;
              var height = this.cameras.main.height;
              var loadingText = this.make.text({
                  x: width / 2,
                  y: height / 2 - 50,
                  text: 'Loading...',
                  style: {
                      font: '20px Arvo',
                      fill: '#ffffff'
                  }
              });
              loadingText.setOrigin(0.5, 0.5);

              var percentText = this.make.text({
                  x: width / 2,
                  y: height / 2 - 5,
                  text: '0%',
                  style: {
                      font: '18px Arvo',
                      fill: '#ffffff'
                  }
              });
              percentText.setOrigin(0.5, 0.5);



                         this.load.on('progress', function (value) {
                             percentText.setText(parseInt(value * 100) + '%');
                             progressBar.clear();
                             progressBar.fillStyle(0xffffff, 1);
                             progressBar.fillRect(250, 280, 300 * value, 30);
                         });



                         this.load.on('complete', function () {
                             progressBar.destroy();
                             progressBox.destroy();
                             loadingText.destroy();
                             percentText.destroy();
                         });



    this.load.image("woodenFloor", "../assets/tilesets/woodenFloor.png");
    this.load.image("Two-Dark-BaysWhiteBG", "../assets/tilesets/Two-Dark-BaysWhiteBG.png");
  }


create (){



  this.add.image(400,300, "woodenFloor").setScale(.3);
  this.add.image(400, 300, "Two-Dark-BaysWhiteBG").setScale(.7);
this.text = this.add.text(226,500, "Click anywhere to start", {font: "30px Arvo", color: "black"});
/*this is another way to use the keys on the keyboard.  https://www.youtube.com/watch?v=7cpZ5Y7THmo&t=763s
quicker so you don't have to make the update funcion as well.
*/
this.cameras.main.fadeIn(1000);


this.cameras.main.on('camerafadeoutcomplete', function () {

  this.scene.start("level1");

}, this);

this.input.on('pointerdown', function(event){
     this.cameras.main.fade(1000);
}, this);



  }

}
