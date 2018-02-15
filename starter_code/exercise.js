/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
window.onload =function(){
    exercise.run();
};

var counter = 0; 

var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.position = 0;
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};

// function timer(){
//     exercise.run;
//     counter++;
//     if(counter < 1000){
//             setTimeout(timer, 50); //this is a loop 
//         }
//     }

exercise.updatePosition = function() {
    exercise.position = exercise.position + exercise.increment; 
    exercise.img1.style.left = exercise.position + 'px';
    
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"

};

exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src='PacMan1.png';
            exercise.flag = 0;
        } else {
            exercise.img1.src='PacMan2.png';
            exercise.flag = 1;
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src='PacMan3.png';
            exercise.flag = 0;

        } else {
              exercise.img1.src='PacMan4.png';
                exercise.flag = 1;

        }
    }
};

exercise.checkWallCollision = function() {
       if(exercise.position>600){
         exercise.increment = -exercise.increment;
    }
    
       if(exercise.position<20){
         exercise.increment = -exercise.increment;
    }

    //reset the direction of motion if wall is hit
    //you need to take into account image width
};
    
