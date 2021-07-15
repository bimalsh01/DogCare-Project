// window.onclick = function(event){
//     if(!event.target.matches("#myDropdown")){
//         var openDropdown = drops.length[i];
//         if (openDropdown.classList.contains("show")){
//             openDropdown.classList.remove("show");
//     }
            
// }

// const nav = document.getElementById('#header-top');
// let navTop = nav.offsetTop;

// function fixedNav(){
//     if(window.scrollY >= navTop){
//         nav.classList('sticky')
//     } else{
//         nav.classList.remove('sticky');
//     }
// }
// window.addEventListener('scroll', fixedNav);




// window.onscroll = function(){dropFunction()};

// var navbar =  document.getElementById("header-top");
// var sticky = navbar.offsetTop;

// function dropFunction(){
//     if(window.pageYOffset >= sticky){
//         navbar.classList.add("sticky")
//     } else{
//         navbar.classList.remove("sticky")
//     }

// }


function dropFcn(){
    console.log("Hello")
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener('scroll',function(){
    var header = this.document.querySelector("#header-top");
    header.classList.toggle('sticky', window.scrollY > 0);
});

