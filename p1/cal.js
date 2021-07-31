let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        // console.log("button text",buttonText);
        if(buttonText=="X"){
            buttonText="*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=="C"){
            screenValue ="";
            screen.value = screenValue;
        }
        else if(buttonText=="backspace"){
            let scrnold=screenValue;
            screenValue = scrnold.substr(0, scrnold.length - 1);
            screen.value = screenValue;
        }
        else if(buttonText=="="){
            let ans=eval(screenValue);
            screenValue=ans;
            screen.value=ans;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}