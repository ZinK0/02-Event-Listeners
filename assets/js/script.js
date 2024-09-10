var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
// you can select the element with querySelector with id, class, tag that pass in the parameter
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// TODO: Add a comment describing the functionality of the following code:
// this code create the function and that function will add the count to the countEl html element.
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener:
// There are many event in JS with DOM, now this code use 'click' event when you click the
// incrementEl following call back function will run and that function will add number each time
// when you click the incrementEl
incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
// This event is same as above but the function has different. This function will reduce from the count
// when you click decrementEl element
decrementEl.addEventListener("click", function () {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
