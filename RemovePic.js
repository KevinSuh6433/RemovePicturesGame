
/* Modify to create 500 boxes at random locations in the container div.

   When a box is hovered over, you should delete it from the div.
   When the div has no more children, pop up an alert that says
   how many seconds it took to finish the game.

   State if the score is a high score

   The button is disabled while playing the game,
   but when it is finished, can restart the game by pressing
   the start button
   */

var high = 0;
// this num for when the first score is stored as the high score
var num = 0;

//method called when window is loaded up
window.onload = function () {
  $("myButton").onclick = createBoxes;

  var newP1 = document.createElement("p");
  var top1 = Math.floor(Math.random() * 401) + "px";
  var left1 = Math.floor(Math.random() * 401) + "px";
  newP1.style.top = top1;
  newP1.style.left = left1;
  newP1.style.backgroundColor = black;
}

/* Creates 500 boxes at a random location in the div and with many color options. 

  When a mouse is moved over a box, it deletes itself from the container div.
*/
function createBoxes() {
  document.getElementById("myButton").disabled = true;

  var startTime = new Date();
  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

  for (var i = 0; i < 500; i++) {

    var newP = document.createElement("p");
    var top = Math.floor(Math.random() * 401) + "px";
    var left = Math.floor(Math.random() * 751) + 300 + "px";
    newP.style.top = top;
    newP.style.left = left;
    newP.style.backgroundColor = colors[Math.floor(Math.random() * 5)];

    newP.observe("mouseover", boxGone);
    $("container").appendChild(newP);
  }

  /* This function is called when a box gets the action of the mouse being over it
    Deletes the box from the container div
  */
  function boxGone() {
    $("container").removeChild(this);

    // this statement is true (ran) when there is no elements in the container
    if ($("container").children.length < 1) {
      //calculating the time it took to finish
      var finalTime = (new Date() - startTime) / 1000;
      alert("Took " + finalTime + " seconds to clear the squares!!");

      //checking to see if it is an high score or if it is the first score being recoreded
      if (finalTime < high || num == 0) {
        num = 1;
        high = finalTime;
        $("highScore").innerHTML = high;
        alert("THIS IS YOUR NEW HIGH SCORE!!!");
      }
      document.getElementById("myButton").disabled = false;
    }
  }

}
