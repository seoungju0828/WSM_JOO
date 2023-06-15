//.nav-toggle 클릭하면
//.nav-toggle i 햄버거 메뉴 <-> X
///nav-list에 .show-menu toggle

const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUI = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);

console.log(navListUI);
//.nav-toggle 클릭하면
nav_toggle.onclick = () => {
    //.nav-toggle i 햄버거 메뉴 <-> X
    //class에서 bi bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    //nav-list에 .show-menu toggle
    navListUI.classList.toggle("show-menu");
}

//HTML -> js
//1. id 같은 이름의 요소가 하나
//  const navToggleDiv = document.getElementById("nav-toggle");

//2. 같은 이름의 요소가 여러개일 수 있음
//  const navTglleDiv = document.getElementsByClassName("nav-toggle")[0];

//3. Tag
//  const navToggleDiv = document.getElementsByTagName("div")[0];

//4. CSS selector
//  const navToggleDiv = document.querySelector("#nav-toggle");
//  const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
//  const navToggleDiv = document.querySelectorAll("div")[0];

//5. XPathJep

// nav_toggle.onclick = () => alert("HI");

// function sayHello() {
//     alert("HI");
// }

// nav_toggle.onclik = function () {
//     alert("HI");
// };

// nav_toggle.onclik = () => {
//     alert("HI");
// };