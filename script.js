const elements = document.querySelectorAll(".card");
const bookmarks = document.getElementsByClassName("fa-bookmark");

for(bookmark of bookmarks){

    bookmark.addEventListener("mouseenter", (event)=>{
        console.log("enter");
        console.log(event.target);
        event.target.classList.remove("fa-regular");
        event.target.classList.add("fa-solid");
    });

    bookmark.addEventListener("mouseleave", (event)=>{
        console.log("leave");
        console.log(event.target);
        event.target.classList.add("fa-regular");
        event.target.classList.remove("fa-solid");
    });    
}

for(element of elements){
    element.addEventListener("mouseenter", (event)=>{
        event.target.classList.add("animated");
    });

    element.addEventListener("mouseleave", (event)=>{
        event.target.classList.remove("animated");
    })
}