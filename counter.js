var clicks = 0;
var buton1 = document.getElementById("increment")
var buton2 = document.getElementById('reset')
var link = document.getElementById("clicks")

function increment() {
    clicks += 1;
};

function reset() {
   clicks = 0
}

function render() {
    link.innerText = clicks;
}

buton1.addEventListener("click", function() {
  increment()
  render()
})


buton2.addEventListener("click", function() {
  reset()
  render()
})
