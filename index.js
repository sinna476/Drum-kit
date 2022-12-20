var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        
    });//what to do when clicked.
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;                
    
        default:console.log(innerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);
}
































// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// // 打印querySelectorAll
// console.log("document.querySelectorAll: ", document.querySelectorAll(".drum"));

// for (var i = 0; i < numberOfDrumButtons; i++) {
//   // 每次循环，打印的内容
//   console.log("i=" + i);
//   console.log("document.querySelector: ", document.querySelector(".drum")[i]);
//   console.log("document.querySelectorAll[i]: ", document.querySelectorAll(".drum")[i]);
// }


// 2022.12.12总结 使用querySelectorAll方法漏了all，然后引发如何学会debug，数组定义，类，对象，方法，属性，函数嵌套，小白讲编程；