export function mostrarMenuPrincipal(){
    console.log("=== Menú ===");
    console.log("1: Buscar");
    console.log("2: Añadir");
    console.log("3: Modificar");
    console.log("4: Eliminar");
    console.log("0: Salir");
}

export function menuBuscar(){
    console.log("=== Buscar Pokémon ===");
    console.log("1: Mostrar todos");
    console.log("2: Buscar por nombre");
    console.log("3: Filtrar por tipo");
    console.log("4: Filtrar por habilidad");
    console.log("0: Volver al menú principal");
}

export function buscarPokemon(texto, datos, campo) {
    if (!texto) return;
  
    const busqueda = texto.trim().toLowerCase();
  
    const resultados = datos.filter(pokemon =>
      pokemon[campo]?.toLowerCase().includes(busqueda)
    );

    if (resultados.length > 0) {
      mostrarDatos(resultados);
    } else {
      console.log(`No se encontraron Pokémon por ${campo} con ese texto.`);
    }

    console.log("Búsqueda terminada");
  }

export function anadirPokemon(datos) {
    const nombre = prompt("Nombre del Pokémon:");
    if (nombre === null || nombre.trim() === "") return;
  
    const tipo = prompt("Tipo:");
    if (tipo === null || tipo.trim() === "") return;
  
    const habilidad = prompt("Habilidad:");
    if (habilidad === null || habilidad.trim() === "") return;
  
    const nuevoPokemon = {
      id: Math.max(0, ...datos.map(pokemon => pokemon.id)) + 1,
      nombre: nombre.trim(),
      tipo: tipo.trim(),
      habilidad: habilidad.trim()
    };
  
    datos.push(nuevoPokemon);
    console.log("Pokémon añadido:");
    mostrarDatos([nuevoPokemon]);
}

export function modificarPokemon(datos) {
    const id = Number(prompt("ID del Pokémon que quieres modificar:"));
    const pokemon = datos.find(pokemon => pokemon.id === id);
  
    if (!pokemon) {
      console.log("No se encontró un Pokémon con ese ID.");
      return;
    }
  
    const nombre = prompt(`Nombre (${pokemon.nombre}):`);
    const tipo = prompt(`Tipo (${pokemon.tipo}):`);
    const habilidad = prompt(`Habilidad (${pokemon.habilidad}):`);
  
    if (nombre?.trim()) pokemon.nombre = nombre.trim();
    if (tipo?.trim()) pokemon.tipo = tipo.trim();
    if (habilidad?.trim()) pokemon.habilidad = habilidad.trim();
  
    console.log("Pokémon modificado:");
    mostrarDatos([pokemon]);
  }

export function eliminarPokemon(datos) {
    const id = Number(prompt("ID del Pokémon que quieres eliminar:"));
    const indice = datos.findIndex(pokemon => pokemon.id === id);
  
    if (indice === -1) {
      console.log("No se encontró un Pokémon con ese ID.");
      return;
    }
  
    // const elementosEliminados = datos.splice(indice, 1);
    // const eliminado = elementosEliminados[0];
    const eliminado = datos.splice(indice, 1)[0];
  
    console.log("Pokémon eliminado:");
    mostrarDatos([eliminado]);
}

export function mostrarDatos(datos) {
    datos.forEach(pokemon => {
      console.log(
        `ID: ${pokemon.id} 
        | Nombre: ${pokemon.nombre} 
        | Tipo: ${pokemon.tipo} 
        | Habilidad: ${pokemon.habilidad}`
      );
    });
  }
  
