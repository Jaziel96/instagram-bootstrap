function alternarVista(e){
    let imagenes=document.getElementsByClassName("columna-imagen")
    let textos=document.getElementsByClassName("columna-texto")
    console.log("Textos " + textos.length)
    if(e.target.id=="btnGaleria"){
        // Codigo de modo galeria
        for(let i=0; i<imagenes.length;i++){
            imagenes.item(i).classList.add("col-md-4", )
        }
        for(let i=0; i<textos.length;i++){
            textos.item(i).classList.add("d-none")
        }
    }else{
        // Codigo de modo lista
        for(let i=0; i<imagenes.length;i++){
            console.log(i)
            imagenes.item(i).classList.remove("col-md-4",)
        }
        for(let i=0; i<textos.length;i++){
            textos.item(i).classList.remove("d-none")
        }
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btnGaleria").addEventListener("click",alternarVista)
    document.getElementById("btnLista").addEventListener("click",alternarVista)
})