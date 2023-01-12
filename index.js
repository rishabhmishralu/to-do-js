

document.querySelector('#click').addEventListener("click", () => {

    document.querySelector('.main-2').style.display = "block"
    document.querySelector('.blur').style.filter = "blur(3px)"
    

})


document.querySelector('.add').addEventListener("click", () => {
   
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.main-2').style.display = "none"
    
    var text = document.querySelector(".text-input").value
    newdiv = document.createElement("div")


    newdiv.innerHTML = `<h1 style="text-align:center; color: limegreen; " class="heading"  onclick="clickheading(event)" >${text}</h1><hr> <div class="msd"></div><i class="fa-solid fa-circle-plus" id="hi" onclick="addinnerlist(event)" ></i><br><i class="fa-solid fa-trash-can" id="remove" onclick="remove(event)" ></i></hr>`
    newdiv.setAttribute("class", "list-item")
    newdiv.style.color = "red"
    newdiv.style.height = "330px"
    newdiv.style.width = "300px"
    newdiv.style.borderRadius = "10px"
    newdiv.style.border = "2px solid red"
    newdiv.style.backgroundColor = "black"
    newdiv.style.margin = "40px"
    document.querySelector('.list').appendChild(newdiv)


})


function close1(){
    document.querySelector('.main-2').style.display = "none"
    document.querySelector('.blur').style.filter = "blur(0px)"
    console.log("derfewerfdwe");


}



function remove(event){
    var rem=event.target
    document.querySelector('.blur').style.filter="blur(0px)"
       rem.parentElement.remove()
        console.log("dfd");
}
let abc
function addinnerlist(event){
    abc=event.target
    console.log(abc);
    document.querySelector(".page-3-card").style.display = "block"
    document.querySelector('.blur').style.filter = "blur(3px)"
    document.querySelector(".page-4").style.display = "none"
    document.querySelector('.list').style.filter = "blur(3px)"
    console.log("rtyu");
    // console.log(abc.parentElement.parentElement);
}

 

document.querySelector(".page-3add").addEventListener("click", () => {
   
   
    let text3 = document.querySelector("#text-input3").value
    document.querySelector(".page-3-card").style.display = "none"
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.list').style.filter = "blur(0px)"
    newdiv2 = document.createElement("div")
    newdiv2.innerHTML = `<ul><li  class="itemlist" style="color: gold;" onclick="listitem(event)" >${text3}</li></ul>`
    console.log(abc.parentElement.children[2]);
    abc.parentElement.children[2].appendChild(newdiv2)
    document.querySelector(".page-4").style.display = "block"
    console.log("rtyui");
   

})


function clickheading(event){
        //    document.querySelector(".heading-top").innerHTML = `<h1>${text}</h1>`
        click=event.target
             document.querySelector(".page-4").style.display = "block"
               document.querySelector(".list").style.display="none"
               document.querySelector(".cente-box").appendChild(click.parentElement)

             console.log("clichjk");
   
}

function backbutton(){
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector(".no-list-added").style.display="block"
    // document.querySelector(".list").style.display="flex"
    document.querySelector(".page-4").style.display = "none"
    document.querySelector('.list').style.filter = "blur(0px)"
}


function closepage3(){
    document.querySelector(".page-3-card").style.display = "none"
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.list').style.filter = "blur(0px)"
}
function listitem(event){
     var d=event.target
     d.parentElement.style.textDecoration="line-through"
     d.parentElement.style.color="white"
     d.parentElement.style.fontStyle="italic"
    //  document.querySelector(".itemlist").style.textDecoration="line-through"
     console.log("tedftyuijhgfdfgilkjhghj");
}