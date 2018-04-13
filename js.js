for (var i = 0; i < document.querySelectorAll(".item section").length; i++) {
  document.querySelectorAll(".item section")[i].addEventListener("click", function() {
    this.parentElement.classList.toggle("active")
  })
}

var winkelwagen = []
var obj = {
  ps4: {
    title: "PS4",
    image: "./img/items/ps4.png",
    cost: 400,
    amount: 0,
  },
  controller: {
    title: "PS4 controller",
    image: "./img/items/controller.png",
    cost: 60,
    amount: 0,
  },
  hdmi: {
    title: "HDMI Cable",
    image: "./img/items/hdmi.png",
    cost: 40,
    amount: 0,
  },
  headset: {
    title: "PS4 controller",
    image: "./img/items/headset.png",
    cost: 25,
    amount: 0,
  }
}



for (var i = 0; i < document.querySelectorAll(".item button:first-of-type").length; i++) {
  document.querySelectorAll(".item button:first-of-type")[i].addEventListener("click", reload)
}

  function reload(){
    console.log("reload");
    if (this.parentElement.parentElement.id == "ps4") {
      obj.ps4.amount++
    } else if (this.parentElement.parentElement.id == "controller") {
      obj.controller.amount++
    } else if (this.parentElement.parentElement.id == "hdmi") {
      obj.hdmi.amount++
    } else {
      obj.headset.amount++
    }
    reload2()
  }

  function reload2(){

    if (obj.ps4.amount > 0) {
      document.querySelector(".ps4").innerHTML = `
          <p class="verwijderItem">x</p>
          <img src="${obj.ps4.image}">
          <p>${obj.ps4.title}</p>
          <p>€${obj.ps4.cost},-</p>
          <input id="ps4Input" type="text" name="" value="${obj.ps4.amount}">
        `
    } else {
      document.querySelector(".ps4").innerHTML = ""
    }
    if (obj.controller.amount > 0) {
      document.querySelector(".controller").innerHTML = `
          <p class="verwijderItem">x</p>
          <img src="${obj.controller.image}">
          <p>${obj.controller.title}</p>
          <p>€${obj.controller.cost},-</p>
          <input id="controllerInput" type="text" name="" value="${obj.controller.amount}">
        `
    } else {
      document.querySelector(".controller").innerHTML = ""
    }
    if (obj.hdmi.amount > 0) {
      document.querySelector(".hdmi").innerHTML = `
          <p class="verwijderItem">x</p>
          <img src="${obj.hdmi.image}">
          <p>${obj.hdmi.title}</p>
          <p>€${obj.hdmi.cost},-</p>
          <input id="hdmiInput" type="text" name="" value="${obj.hdmi.amount}">
        `
    } else {
      document.querySelector(".hdmi").innerHTML = ""
    }
    if (obj.headset.amount > 0) {
      document.querySelector(".headset").innerHTML = `
          <p class="verwijderItem">x</p>
          <img src="${obj.headset.image}">
          <p>${obj.headset.title}</p>
          <p>€${obj.headset.cost},-</p>
          <input id="headsetInput" type="text" name="" value="${obj.headset.amount}">
        `
    } else {
      document.querySelector(".headset").innerHTML = ""
    }
    if (document.querySelector(".ps4 input")) {
      document.querySelectorAll(".ps4 input")[0].onchange = function(){
        console.log(this);
        obj.ps4.amount = parseInt(this.value)
        console.log(obj.ps4.amount);
        reload2()
      }
      document.querySelector(".ps4 .verwijderItem").addEventListener("click", function(){
        obj.ps4.amount = 0
        reload2()
      })
    }
    if (document.querySelector(".controller input")) {
      document.querySelectorAll(".controller input")[0].onchange = function(){
        console.log(this);
        obj.controller.amount = parseInt(this.value)
        console.log(obj.controller.amount);
        reload2()
      }
      document.querySelector(".controller .verwijderItem").addEventListener("click", function(){
        obj.controller.amount = 0
        reload2()
      })
    }
    if (document.querySelector(".hdmi input")) {
      document.querySelectorAll(".hdmi input")[0].onchange = function(){
        console.log(this);
        obj.hdmi.amount = parseInt(this.value)
        console.log(obj.hdmi.amount);
        reload2()
      }
      document.querySelector(".hdmi .verwijderItem").addEventListener("click", function(){
        obj.hdmi.amount = 0
        reload2()
      })
    }
    if (document.querySelector(".headset input")) {
      document.querySelectorAll(".headset input")[0].onchange = function(){
        console.log(this);
        obj.headset.amount = parseInt(this.value)
        console.log(obj.headset.amount);
        reload2()
      }
      document.querySelector(".headset .verwijderItem").addEventListener("click", function(){
        obj.headset.amount = 0
        reload2()
      })
    }
    var totaal = obj.ps4.amount + obj.controller.amount + obj.hdmi.amount + obj.headset.amount
    document.getElementById("inCart").innerHTML = totaal

    document.querySelector(".totaal").innerHTML = `
     <section>
       <p> Aantal items = ${totaal}</p>
       <p> Totaal = €${(obj.ps4.cost * obj.ps4.amount) + (obj.controller.cost * obj.controller.amount) + (obj.hdmi.cost * obj.hdmi.amount) + (obj.headset.cost * obj.headset.amount)},-</p>
     </section>
     <button type="button" name="button">Naar betalen</button>
    `
  }







// for (var i = 0; i < document.querySelectorAll(".item footer button:first-of-type").length; i++) {
//   document.querySelectorAll(".item footer button:first-of-type")[i].addEventListener("click", function(){
//     var image = window.getComputedStyle(this.parentElement.parentElement, null).getPropertyValue("background-image");
//     var title = this.parentElement.parentElement.id
//     var cost = this.parentElement.parentElement.childNodes[1].childNodes[5].childNodes[1].innerHTML
//     image = image.replace(`url("http://localhost:1234`, "")
//     image = image.replace(")","")
//     var el = {title: title, image: image, cost: cost};
//     winkelwagen.push(el)
//     document.getElementById("inCart").innerHTML = winkelwagen.length
//     winkelwagenFill()
//   })
// }
//
// function winkelwagenFill(){
//   console.log(winkelwagen);
//   document.getElementById("cart").innerHTML = ""
//   for (var i = 0; i < winkelwagen.length; i++) {
//     document.getElementById("cart").innerHTML += `
//       <div class="cartItem">
//         <p class="verwijderItem">x</p>
//         <img src="${winkelwagen[i].image}">
//         <p>${winkelwagen[i].title}</p>
//         <p>${winkelwagen[i].cost}</p>
//       </div>
//     `
//   }
//   var totaal = 0
//   for (var i = 0; i < winkelwagen.length; i++) {
//     var prijs = winkelwagen[i].cost
//     prijs = prijs.replace(",-", "")
//     prijs = parseInt(prijs.replace(`€`, ""))
//     totaal = totaal + prijs
//     console.log(totaal);
//   }
//   console.log("hallo");
//   document.getElementById("cart").innerHTML += `
//     <div class="cartItem">
//       <section>
//         <p> Aantal items = ${winkelwagen.length}</p>
//         <p> Totaal = €${totaal},-</p>
//       </section>
//       <button type="button" name="button">Naar betalen</button>
//     </div>
//   `
// }

document.querySelectorAll(".cart")[0].addEventListener("click", function() {
  document.getElementById("cart").classList.toggle("none")
  for (var i = 0; i < document.querySelectorAll(".cartItem").length; i++) {
    document.getElementsByClassName("cartItem")[i].classList.toggle("visable")
  }
})
