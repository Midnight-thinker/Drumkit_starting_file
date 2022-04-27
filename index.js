var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        
         var buttonInnerHTML=this.innerHTML;
         playMusic(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function(event){
    playMusic(event.key) 
    
});    

function playMusic(key) {
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
    
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;

        case "d":
            var snare=new Audio("sounds/snare.mp3");
            tom4.play(); 
            break;
            
        case "j":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;

        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;

        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play(); 
            break;

        default:
            alert("Not a valid input");
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
} 