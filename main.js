'use strict'

// {
//   const input = document.querySelector("input");
//   const ul = document.querySelector("ul");
//   const btn = document.querySelector("button");

//   btn.addEventListener("click", function(){
//     const li = document.createElement("li");
//     li.textContent = input.value;
//     ul.appendChild(li);
//     input.value = "";
//     input.focus();
//   })

// } 

{
  document.querySelector("button").addEventListener("click", function(){
    const li = document.createElement("li");
    const select = document.querySelector("select");
    li.textContent = select.value;
    document.querySelector("ul").appendChild(li);
  })
}

