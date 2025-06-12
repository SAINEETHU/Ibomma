
let image=document.querySelectorAll("img");

image.forEach((image)=>{   
image.addEventListener("click", (e) =>{
    let movieLink = document.createElement("a");
    movieLink.href="https://www.youtube.com/";
    movieLink.target="_blank";
    movieLink.click();
});
});