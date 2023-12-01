const nombreCache = "Portafolio";
const archivosCache = [
    "/",
    "/index.html",
    "/css/Styles.css",
    "/js/app.js",
    "/js/Script.js",
    "/Archivos/CV.pdf",
    "/img/CineVerse.jpg",
    "/img/Onlypack.jpg"
]
self.addEventListener("install", e => {
    console.log("El servis worker se instalo", e)

    e.waitUntil(
        caches.open(nombreCache).then((cache) => {
            cache.addAll(archivosCache);
        })
    )
})
                                                                                        
self.addEventListener("activate", e => {
    console.log("el servicio worker activo", e)    
})

self.addEventListener("fetch" ,e=> {
    console.log("fetch..", e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
    )
})