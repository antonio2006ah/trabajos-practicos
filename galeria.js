const climas = [
    {
        nombre: "Atardecer",
        descripcion: "Cielo cálido con tonos naranjas y dorados mientras cae el sol en el horizonte.",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        fondo: "#fed7aa"
    },
    {
        nombre: "Lluvia",
        descripcion: "Días nublados y frescos con gotas cayendo sobre la naturaleza y un ambiente tranquilo.",
        url: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80",
        fondo: "#cbd5e1"
    },
    {
        nombre: "Playa",
        descripcion: "Arena suave, brisa marina y agua cristalina ideal para descansar bajo el sol.",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        fondo: "#bae6fd"
    },
    {
        nombre: "Campo",
        descripcion: "Amplios espacios verdes, aire puro y calma rodeados de vegetación abierta.",
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        fondo: "#bbf7d0"
    }
];

function mostrarClima(indice) {
    const visor = document.getElementById("visor");
    let elegido;

    if (indice === 0) {
        elegido = climas[0];
        document.body.style.backgroundColor = elegido.fondo;
    } else if (indice === 1) {
        elegido = climas[1];
        document.body.style.backgroundColor = elegido.fondo;
    } else if (indice === 2) {
        elegido = climas[2];
        document.body.style.backgroundColor = elegido.fondo;
    } else if (indice === 3) {
        elegido = climas[3];
        document.body.style.backgroundColor = elegido.fondo;
    } else {
        elegido = climas[0];
        document.body.style.backgroundColor = elegido.fondo;
    }

    // Coloca la imagen arriba y la pequeña descripción abajo dentro del #visor
    visor.innerHTML =
        '<img src="' + elegido.url + '" alt="' + elegido.nombre + '">' +
        '<p>' + elegido.descripcion + '</p>';
}

// Muestra el primer clima (Atardecer) al cargar la página
mostrarClima(0);