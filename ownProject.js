
let btns = document.querySelectorAll("#button");
btns.forEach((btn)=>
 btn.addEventListener("click", ()=>{
     console.log("button was clicked");
 })
);

let images = document.getElementsByClassName("image-item");
Array.from(images).forEach((image)=>
    image.addEventListener("click",()=>{
        console.log("image was clicked");
    })
);