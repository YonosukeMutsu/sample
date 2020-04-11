'use strict'

{
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  const ul = document.querySelector("ul");

  btn.addEventListener("click", function(){
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);

    input.value = "";
    input.focus();
  })
}
