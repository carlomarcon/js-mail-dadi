const ListGuest = ["giulio@gmail.com", "marco@gmail.com", "Fabrizio@gmail.com"];
const Button = document.querySelector("button");

Button.addEventListener("click", function () {
  let found = false;
  let userEmail = document.querySelector("input").value;

  for (let i = 0; i < ListGuest.length; i++) {
    if (userEmail == ListGuest[i]) {
      found = true;
    }
  }

  if (found === true) {
    document.querySelector("h1").classList.add("display-change", "Confirmed");
    document.querySelector("h1").classList.remove("display-disappear");
    document.querySelector(".access").classList.add("display-disappear");
  } else {
    document.querySelector("h2").classList.add("display-change", "Refused");
    document.querySelector("h2").classList.remove("display-disappear");
    document.querySelector(".access").classList.add("display-disappear");
  }
});
