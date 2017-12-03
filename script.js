
/*If user finds one instance interesting, allow user to click on each instance to bookmark it */
var count = 0;
/*Change background color of each instance when user clicks */
function myFunction(divObj) {
    count++;
    if (count%2 == 0) {
        divObj.style.background="#ffffff";
    }
    else {
        divObj.style.background="#800000";
    }
}