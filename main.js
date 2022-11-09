let hideshow = document.getElementsByClassName("hideshow");
hideshow[0].addEventListener("click",runHideShow);

function runHideShow(){
    let passInp = document.getElementById("password");
    let eyeStat = hideshow[0].childNodes[0];
    if(eyeStat.classList.contains("fa-eye")){
        passInp.setAttribute("type","text");
        eyeStat.classList.add("fa-eye-slash");
        eyeStat.classList.remove("fa-eye");
    }else{
        passInp.setAttribute("type","password");
        eyeStat.classList.remove("fa-eye-slash");
        eyeStat.classList.add("fa-eye");
    }
}