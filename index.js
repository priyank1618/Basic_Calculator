//here in screen     <input type="text" name="screen" id="display"> occur
let screen = document.getElementById("display")


//due to query selectir all the buttons are in buttons variable
buttons = document.querySelectorAll("button");


//intialize the screenvalue blank
let screenValue = "";



//after clicking each of button the button text will be in variable button text

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {

      //this do personally for the X button bcz js not understand it
      buttonText = "*";
      screenValue += buttonText;


      //here value property is use for the set text value in the text box
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screen.value = screenValue;
      screenValue = "";
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
        screenValue="";
      } catch (error) {
        result = "Expression error";
      }
      screen.value = result;
    } else {

      //here for every button set text as a button text
      
      screenValue += buttonText;
      screen.value = screenValue;
}
});
}