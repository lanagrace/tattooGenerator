 var images = []
 let r =0;
function preload(){
 
  for(let i=1;i<34;i++){
    var image = loadImage("/Images/img"+i+".jpg")

    append(images, image);
/*     console.log(images.length);*/
  }
}

function setup() {
  var canvas = createCanvas(1000, 800);
  canvas.parent("p5container");

}



function draw() {
  background(100);
  
  image(images[r], 0, 0)
  
  }

  function mouseClicked() {
    r = floor(random(1, images.length));

          image(images[r], 0, 0);

    }
  
  