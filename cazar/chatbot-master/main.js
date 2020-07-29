// Estas son palabras / frases que el usuario podría escribir

const trigger = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"]
];

// Estas son respuestas de bot, emparejadas en orden con las frases 'activadoras' anteriores
const reply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Yes?"]
];

// Este es un pequeño conjunto de 'capturar todo' básicamente al azar para cualquier cosa que el usuario ingrese fuera de las posibles frases desencadenantes

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening..."
];

// El mismo propósito que la "alternativa" pero un intento de ser culturalmente relevante ;)

const coronavirus = ["Please stay home"];

// Versiones en español del diálogo

const disparadores = [
	["hola","hey","buenos días","buenas tardes","buen día"],
	["cómo estás","cómo va la vida","qué tal van las cosas"],
    ["qué estás haciendo","qué está ocurre ahora","qué más"],
    ["qué edad tienes"],
    ["quién eres","eres humano","eres robot","eres humano o robot"],
    ["quién te creó","quién te hizo"],
    ["tu nombre por favor","tu nombre","podría saber tu nombre","cuál es tu nombre","cómo te llaman"],
    ["te amo"],
    ["feliz","bien","divertido","increíble","fantastico","interesante"],
    ["mal","aburrido","cansado"],
    ["ayúdame","cuéntame historia","cuéntame chiste"],
    ["ah","si","ok","entendido","bien"],
    ["gracias","muchas gracias"],
    ["adiós","hasta pronto","hasta luego"],
    ["qué debería comer hoy"],
    ["amigo"],
    ["qué","por qué","cómo","dónde","cuándo"]
    ];

const respuesta = [
    ["Hola","Hey!","¿¡Qué tal!?"],
    ["Bien... ¿Tú cómo estás?","Muy bien... ¿Tú cómo estás?","Fantástico... ¿Tú cómo estás?"],
    ["No mucho","Ya casi me iba a ir a dormir","¿Puedes adivinar?","De hecho, no sé"],
    ["Soy infinito"],
    ["Solo soy un robot","Soy un robot. ¿Qué eres tú?"],
    ["El único y solo Dios, JavaScript"],
    ["Soy el sin-nombre","No tengo un nombre"],
    ["Yo también te amo","Yo también"],
    ["¿Alguna vez te has sentido mal?","Me alegra oirlo"],
    ["¿Por qué?","¿Por qué? ¡No deberías!","Trata de ver televisión"],
    ["¿Sobre qué?","Érase una vez..."],
    ["Cuéntame una historia","Cuéntame un chiste","Cuéntame sobre ti mismo"],
    ["Con gusto"],
    ["Adiós","Hasta luego","Chao"],
    ["Sushi","Pizza"],
    ["Amigo!"],
    ["¿Si?"]
];

const alternativa = [
    "Igual",
    "Continúa...",
    "Amigo...",
    "Intenta nuevamente",
    "Estoy escuchando..."
];

const covid = ["¡Quédate en casa!"]

document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});

function output(input) {
  let product;

  //Transforma lo que el usuario ingresa en minúsculas y elimina todos los caracteres, excepto los caracteres de palabras, el espacio y los dígitos
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  //Busca una coincidencia exacta con la matriz 'activador'; si no hay ninguno, verificará si el mensaje contiene 'coronavirus' y, si no, una alternativa aleatoria
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
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
  debugger
}
