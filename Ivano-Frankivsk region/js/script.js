let postabout = document.getElementById("postabout");
let button = document.getElementById("btn");


button.onclick = function (){
    if (postabout.className == "open"){
      postabout.className = "";
      button.innerHTML = "Детальніше";
    }else {
        postabout.className = "open";
        button.innerHTML = "Сховати";
    }
};