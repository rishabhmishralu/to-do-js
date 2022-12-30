

document.querySelector('#click').addEventListener("click", () => {

    document.querySelector('.main-2').style.display = "block"
    document.querySelector('.blur').style.filter = "blur(3px)"
  

})


document.querySelector('.add').addEventListener("click", () => {

    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.main-2').style.display = "none"

    var text = document.querySelector(".text-input").value
    newdiv = document.createElement("div")


    newdiv.innerHTML = `<h1 style="text-align:center; color: limegreen; " class="heading"  onclick="clickheading()" >${text}</h1><hr> <div class="msd"></div><i class="fa-solid fa-circle-plus" id="hi" onclick="addinnerlist()" ></i><br><i class="fa-solid fa-trash-can" id="remove" onclick="remove(event)" ></i></hr>`
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

function addinnerlist(){

    document.querySelector(".page-3-card").style.display = "block"
    document.querySelector('.blur').style.filter = "blur(3px)"
    document.querySelector('.list').style.filter = "blur(3px)"
    console.log("rtyu");
}


document.querySelector(".page-3add").addEventListener("click", () => {
    let text3 = document.querySelector("#text-input3").value
    document.querySelector(".page-3-card").style.display = "none"
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.list').style.filter = "blur(0px)"
    newdiv2 = document.createElement("div")
    newdiv2.innerHTML = `<ul><li style="color: gold;">${text3}</li></ul>`
    document.querySelector(".msd").appendChild(newdiv2)
    console.log("rtyui");


})


function clickheading(){
    
        //    document.querySelector(".heading-top").innerHTML = `<h1>${text}</h1>`
             document.querySelector(".page-4").style.display = "block"
               document.querySelector(".list").style.display="none"
               document.querySelector(".cente-box").appendChild(newdiv)

             console.log("clichjk");
   
}

function backbutton(){
    document.querySelector('.blur').style.filter = "blur(0px)"
    // document.querySelector(".list").style.display="flex"
    document.querySelector(".page-4").style.display = "none"
}


function closepage3(){
    document.querySelector(".page-3-card").style.display = "none"
    document.querySelector('.blur').style.filter = "blur(0px)"
    document.querySelector('.list').style.filter = "blur(0px)"
}