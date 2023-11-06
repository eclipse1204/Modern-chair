var selected_color=1;
var selected_option=1;

document.querySelector(".details").addEventListener("click",()=>{
    if(selected_option==1)
    {
        selected_option=2;
        document.querySelector(".details").style.opacity="1";
        document.querySelector(".description").style.opacity="0.5";
        document.querySelector(".description_container").classList.remove("turnon");
        document.querySelector(".description_container").classList.add("turnoff");
        document.querySelector(".details_container").classList.remove("turnoff");
        document.querySelector(".details_container").classList.add("turnon");
    }
});

document.querySelector(".description").addEventListener("click",()=>{
    if(selected_option==2)
    {
        selected_option=1;
        document.querySelector(".details").style.opacity="0.5";
        document.querySelector(".description").style.opacity="1";
        document.querySelector(".details_container").classList.remove("turnon");
        document.querySelector(".details_container").classList.add("turnoff");
        document.querySelector(".description_container").classList.remove("turnoff");
        document.querySelector(".description_container").classList.add("turnon");
    }
});



document.querySelector(".btn1").addEventListener("click",()=>{
    if(selected_color!=1)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn1").classList.add("selected_button");
        selected_color=1;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #f1a9a9, #e66767)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="#944852";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair1.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});

document.querySelector(".btn2").addEventListener("click",()=>{
    if(selected_color!=2)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn2").classList.add("selected_button");
        selected_color=2;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #4c4c4c, #262626)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="black";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair2.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});

document.querySelector(".btn3").addEventListener("click",()=>{
    if(selected_color!=3)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn3").classList.add("selected_button");
        selected_color=3;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #8a9fb2, #5f7991)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="#40566e";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair3.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});

document.querySelector(".btn4").addEventListener("click",()=>{
    if(selected_color!=4)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn4").classList.add("selected_button");
        selected_color=4;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #97afc3, #6789a7)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="#5e89b2";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair4.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});

document.querySelector(".btn5").addEventListener("click",()=>{
    if(selected_color!=5)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn5").classList.add("selected_button");
        selected_color=5;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #afa6a0, #8c7f76)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="#8c7f76";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair5.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});

document.querySelector(".btn6").addEventListener("click",()=>{
    if(selected_color!=6)
    {
        document.querySelector(".btn"+selected_color).classList.remove("selected_button");
        document.querySelector(".btn6").classList.add("selected_button");
        selected_color=6;
        setTimeout(()=>{
            document.querySelector(".wrapper").style.backgroundImage="linear-gradient(196deg, #aaadac, #838786)";
        },200);
        document.querySelector(".add_to_c").style.backgroundColor="#5d6160";
        document.querySelector(".chair").classList.remove("animation_chair");
        setTimeout(()=>{
            document.querySelector(".chair").setAttribute("src","./Images/chair6.png");
            document.querySelector(".chair").classList.add("animation_chair");
        },200);
    }
});