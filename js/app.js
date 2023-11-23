if ('serviceWorker' in navigator ){
    navigator.serviceWorker.register("./sw.js")
    .then( registrado => console.log("El servis worker se reguistro" ,registrado))
    .catch(error => console.log("Error al registrar el servis worker" ,error));

}else{
    console.log("el service worker no es compatible");
}