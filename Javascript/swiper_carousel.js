const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})