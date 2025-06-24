
let image=document.querySelectorAll("img");

// image.forEach((image)=>{   
// image.addEventListener("click", (e) =>{
//     let movieLink = document.createElement("a");
//     if(id="anaganaga"){
//         movieLink.href="https://www.youtube.com/watch?v=WH7kqm_4rdU";
//         movieLink.target="_blank";
//         movieLink.click();
//     }
//     else if(id="hit3"){
//         movieLink.href="https://www.youtube.com/watch?v=kAtfaaUgDRU&t=2s";
//         movieLink.target="_blank";
//         movieLink.click();
//     }
    
// });
// });

let btns = document.querySelectorAll("#button");
// let btns=document.getElementsByClassName("btn");

// for(let btn of btns){
// btn.addEventListener("click", ()=>{
//     console.log("button was clicked");
// })
// };

btns.forEach((btn)=>
 btn.addEventListener("click", ()=>{
     console.log("button was clicked");

 })
);