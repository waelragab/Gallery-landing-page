const bookMarks = document.querySelectorAll(".far.fa-bookmark");

for(var i = 0; i < bookMarks.length; i++){
    bookMarks[i].addEventListener("click", function(){
        if(this.className === "far fa-bookmark"){
            this.className = "fas fa-bookmark";
        }else{
            this.className = "far fa-bookmark"
        }
        
    })
}
