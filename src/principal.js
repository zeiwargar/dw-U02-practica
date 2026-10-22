// esto para que vaya en node, comentar si no se usa node
import promptSync from "prompt-sync";
const prompt = promptSync();

import { readFile } from "node:fs/promises";

//fin de codigo para node

import {
    mostrarMenuPrincipal,
    menuBuscar,
    mostrarDatos,
    buscarPokemon,
    anadirPokemon,
    modificarPokemon,
    eliminarPokemon
  } from "./metodos.js";

async function iniciar() {
  //para node
  const datos = JSON.parse(
    await readFile(new URL("./pokemon.json", import.meta.url), "utf8")
  );

  //fin de node
  //quitar en node
  //const respuesta = await fetch("./src/pokemon.json");
  //const datos = await respuesta.json();
  //poner sin node
    
  let opcionPrincipal;

  do{  
        mostrarMenuPrincipal(); 
        
      opcionPrincipal = Number(prompt("Elige una opción:"));
      switch (opcionPrincipal) {
          case 1:
              let opcionBuscar
              do{
              menuBuscar();
              opcionBuscar = Number(prompt("Elige una opción:"));
              switch (opcionBuscar) {
                  //Mostar todos
                  case 1:
                  mostrarDatos(datos);
                  break;
          
                  //buscar por nombre
                  case 2: {
                  const nombre = prompt("Escribe el nombre del Pokémon que buscas:");
                  buscarPokemon(nombre, datos, "nombre");                
                  break;
                  }
                  //Filtrar por tipo
                  case 3:
                      const tipo = prompt("Escribe el tipo de Pokémon que buscas:");
                      buscarPokemon(tipo, datos, "tipo");
                      break;
                  //filtrar por Habilidad
                  case 4:
                      const habilidad = prompt("Escribe la habilidad de Pokémon que buscas:");
                      buscarPokemon(habilidad, datos, "habilidad");
                      break;            
                  //Salir
                  case 0:
                  console.log("Volviendo al menú principal...");
                  break;
          
                  default:
                  console.log("Opción no válida");
              }
              }while (opcionBuscar !== 0);          
              break;
          
          case 2:
            anadirPokemon(datos);
            break;
          case 3:
            modificarPokemon(datos);
            break;
          case 4:
              eliminarPokemon(datos);
            break;
          case 0:
            console.log("Saliendo...");
            break;
          default:
            console.log("Opción no válida");
        }

  }while(opcionPrincipal !== 0)
}

iniciar();