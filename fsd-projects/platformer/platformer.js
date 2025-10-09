$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100,200,-200,10);
createPlatform(200,625, 100,10);
createPlatform(300,575,100,10);
createPlatform(400,500,100,10);
createPlatform(500,450,100,10);
createPlatform(600,400,100,10);
createPlatform(700,350,100,10);
createPlatform(400,300,50,5);
createPlatform(1150,300,1,1);
createPlatform(0,200,1,-300);
createPlatform(100,200,1,100);
createPlatform(100,300,100,10)
createPlatform(1000,500,1,1)
createPlatform(1100,600,1,1)
createPlatform(1200,600,1,1)
createPlatform(1300,600,1,1)

    // TODO 3 - Create Collectables
createCollectable("diamond",400,250);
createCollectable("diamond",1000,500);
createCollectable("diamond",1100,600);
createCollectable("diamond",1200,600);
createCollectable("diamond",1300,600);


    
    // TODO 4 - Create Cannons
createCannon("right",200, 200, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
