let inputTag= document.querySelector("input");
let ultag = document.querySelector("ul");
inputTag.addEventListener('keydown',function(e){
    let key= e.key;
    if(key=='Enter'){
        let value = inputTag.value;
        inputTag.value="";
        let liTag = document.createElement("li");
        liTag.innerHTML=`<div>${value}</div>
                            <div class="delete"><i class="glyphicon glyphicon-remove"></i></div>`;
        handleRemoval(liTag);
        ultag.appendChild(liTag);
    }
})
function handleRemoval(liTag){
    let deletediv = liTag.querySelector(".delete");
    deletediv.addEventListener("click",function(){
        liTag.remove();
    })
}
