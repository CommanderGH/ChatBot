// Al inicio tenemos un arreglo de las posibles entradas del usuario (trigger) y las respuestas
// asociadas (reply). Para la todas las entradas fila [0] (arreglo trigger) le corresponde cualquiera de las
// respuestas de la fila [0] (arreglo reply), la cual se selecciona de manera aleatoria en la función
// encargada de responder. También hay dos arreglos más, uno para capturar si la entrada tiene la
// palabra "coronavirus", y otra en caso de que no coincida con ninguna de las entradas programadas

const trigger = [
  ["hola", "hey", "buenos dias", "buenas tardes", "buen dia"],
  ["como estas", "como va la vida", "que tal van las cosas"],
  ["que estas haciendo", "que ocurre ahora", "que mas"],
  ["que edad tienes"],
  ["quién eres", "eres humano", "eres robot", "eres humano o robot"],
  ["quién te creó", "quién te hizo"],
  ["tu nombre por favor", "tu nombre", "podría saber tu nombre", "cuál es tu nombre", "cómo te llaman"],
  ["te amo"],
  ["feliz", "bien", "divertido", "increíble", "fantastico", "interesante"],
  ["mal", "aburrido", "cansado"],
  ["ayudame", "cuentame historia", "cuentame chiste"],
  ["ah", "si", "ok", "entendido", "bien"],
  ["gracias", "muchas gracias"],
  ["adios", "hasta pronto", "hasta luego"],
  ["qué deberia comer hoy"],
  ["amigo"],
  ["qué", "por qué", "cómo", "dónde", "cuándo"]
];

const reply = [
  ["Hola", "Hey!", "¿¡Qué tal!?"],
  ["Bien... ¿Tú cómo estás?", "Muy bien... ¿Tú cómo estás?", "Fantástico... ¿Tú cómo estás?"],
  ["No mucho", "Ya casi me iba a ir a dormir", "¿Puedes adivinar?", "De hecho, no sé"],
  ["Soy infinito"],
  ["Solo soy un robot", "Soy un robot. ¿Qué eres tú?"],
  ["El único y solo Dios, JavaScript"],
  ["Soy el sin-nombre", "No tengo un nombre"],
  ["Yo también te amo", "Yo también"],
  ["¿Alguna vez te has sentido mal?", "Me alegra oirlo"],
  ["¿Por qué?", "¿Por qué? ¡No deberías!", "Trata de ver televisión"],
  ["¿Sobre qué?", "Érase una vez..."],
  ["Cuéntame una historia", "Cuéntame un chiste", "Cuéntame sobre ti mismo"],
  ["Con gusto"],
  ["Adiós", "Hasta luego", "Chao"],
  ["Sushi", "Pizza"],
  ["Amigo!"],
  ["¿Si?"]
];

const alternative = ["Igual", "Continúa...", "Amigo...", "Intenta nuevamente", "Estoy escuchando..."];

const coronavirus = ["¡Quédate en casa!"]



// Esta función se encarga de activar todo el mecanismo del ChatBot cuando se pulsa Enter

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input")
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});



function output(input) {

  // Esta función es basicamente el ChatBot. En ella se llaman todas las funciones necesarias 
  // para que el ChatBot funcione correctamente

  let product;

  // Transforma lo que el usuario ingresa en minúsculas y elimina todos los caracteres, 
  // excepto los caracteres de letras (incluyendo tildes), el espacio, y los dígitos

  let text = input.toLowerCase().replace(/^[a-zA-Z\u00C0-\u017F]+,\s[a-zA-Z\u00C0-\u017F]+$/gi, "");

  // Esta función cambia cualquier tilde que tenga el texto a un caracter sin tilde

  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // Busca una coincidencia exacta entre lo que el usuario ingresó y las respuestas almacenadas
  // en el arreglo trigger y le asignará una respuesta del arreglo reply, si no encuentra 
  // coincidencias entonces verificará si el mensaje contiene 'coronavirus' el cual tiene
  // la respuesta programada de "¡Quédaate en casa!", y si no, escogerá una alternativa aleatoria
  // del arreglo alternative que se usa cuando no existen coincidencias para lo que el usuario ingresó

  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  }
  else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  }
  else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Función que actualiza el DOM

  addChat(input, product);
}



function compare(triggerArray, replyArray, string) {

  let item;
  let found = false;

  // Recorremos la matriz de las entradas que puede hacer el usuario para buscar una coincidencia
  // Luego, en la matriz de respuesta asociada sacamos al azar una de las respuestas
  // El found evita que se siga buscando coincidencias después de haber hallado una

  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < triggerArray[x].length; y++) {
      if (triggerArray[x][y].includes(string) && !found) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
        found = true;
      }
    }
  }
  return item;
}



function addChat(input, product) {

  // Estas función basicamente añade al DOM lo que dice el humano y lo que dice el ChatBot
  // Es decir, actualiza la página con el diálogo

  const mainDiv = document.getElementById("main");

  // Esta parte añade lo que escribió el usuario

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  // Esta parte añade lo que renpondió el ChatBot

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);

  // Esta parte hace que el ChatBot hable lo que acaba de responder

  speak(product);
}



const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
}