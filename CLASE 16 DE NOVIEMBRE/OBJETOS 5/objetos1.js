const usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

let habilitados = 0;

// Recorremos el objeto usando Object.entries()
Object.entries(usuarios).forEach(([id, estado]) => {
    if (estado === "habilitado") {
        habilitados++;
    }
});

console.log(`Hay ${habilitados} usuarios habilitados.`);