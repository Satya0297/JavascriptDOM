const date = new Date();
document.write(date);

// //selector is used to get data from html page.. here window is the object and document is the method in window and document contains all html tags and data
// const idd = document.getElementById("idd");
// console.log(idd);

// const classs = document.getElementsByClassName("classs");
// console.log(classs);

// const tagg = document.getElementsByTagName("h1");
// console.log(tagg);

// const lis = document.getElementsByTagName("li");
// console.log(lis);

// //QuerySelector and QuerySelectorAll are used the let html tags with data and we can group the tag and date using this select query method

// const idd = document.querySelector("#idd");
// console.log(idd);

// const classs = document.querySelectorAll(".classs");
// console.log(classs);

// const ulLi = document.querySelectorAll("ul li:nth-child(2)");
// console.log(ulLi);

// const paras = document.querySelectorAll(".para,.para1,p");
// console.log(paras);

// //finding child elements using js.. initially it will return the text value between two element tags
// const ulLI = document.querySelector("ul");
// console.log(ulLI);
// console.log(ulLI.childNodes);
// console.log(ulLI.children); //to know total child elements

// const ulli = document.querySelector("ul li:nth-child(3)");
// console.log(ulli);
// console.log(ulli.nextSibling);
// console.log(ulli.nextElementSibling); // to know next element

// console.log(ulli.previousSibling);
// console.log(ulli.previousElementSibling);//to know previous element

// console.log(ulli.parentNode);
// console.log(ulli.parentElement.parentElement); //to know parent elelement

// const listLi = document.querySelector("ul");
// console.log(listLi);

// console.log(listLi.lastChild);
// console.log(listLi.lastElementChild); // to know last element

// console.log(listLi.firstChild);
// console.log(listLi.firstElementChild); // to know first element

// //getAttribute() and setAttribute()
// // Attributes will be present in the tags which are like id,class.,etc,.

// const paraAttribute = document.querySelector(".para");
// console.log(paraAttribute);

// console.log(paraAttribute.getAttribute("id"));
// paraAttribute.setAttribute("id","para11");
// console.log(paraAttribute.getAttribute("id"));

const par = document.querySelector("#par");
console.log(par);

console.log(par.textContent);//it will display text as same in the html
console.log(par.innerText); // it will eliminate the extra spaces and display
console.log(par.innerHTML); // it will display text with inner HTML tags

console.log(par.textContent = "Hello this is text content!");
console.log(par.innerText = "hello this is inner text");
console.log(par.innerHTML = "<h1>this is inner html</h1>");