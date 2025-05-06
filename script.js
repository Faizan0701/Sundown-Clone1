console.log("hi")
const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
}); 

let headImg = document.querySelector('.head-img');
let headCont = document.querySelector('.head-container');
let head = document.querySelectorAll('.head');

headCont.addEventListener("mouseenter", () =>{
    headImg.style.display = "block";
});
headCont.addEventListener("mouseleave", () =>{
    headImg.style.display = "none";
})

head.forEach( (el) =>{
    el.addEventListener("mouseenter", () =>{        
    let img = el.getAttribute('data-img');
    console.log("bye")
    headImg.style.backgroundImage = `url(${img})`;
    })
});




































// let imgCont = document.querySelector('.head-container');
// let headImg = document.querySelector('.head-img');
// let head = document.querySelector('.head');

// imgCont.addEventListener("mouseenter",  () =>{
//     console.log("worked");
//     headImg.style.display = "block";
// });

// imgCont.addEventListener("mouseleave", () =>{
//     headImg.style.display = "none"
// });

// let heads = document.querySelectorAll('.head');
// heads.forEach( (e) =>{  
// e.addEventListener("mouseenter", () =>{
//     let img = e.getAttribute('data-img');
//     headImg.style.backgroundImage = `url(${img})`
// });
// });

