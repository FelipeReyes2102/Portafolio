if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./sw.js")
        .then(registrado => console.log("El service worker se registró", registrado))
        .catch(error => console.log("Error al registrar el service worker", error));
} else {
    console.log("El service worker no es compatible");
}
