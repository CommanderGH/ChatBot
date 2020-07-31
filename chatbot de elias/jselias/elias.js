// Estas son palabras / frases que el usuario podría escribir

const trigger = [
    ["hola que tal", "holi", "Buenas", "hola", "buenos dias","buenos días", "buenas tardes","buenas noches", "que más", "que mas", "que tal","hola que tal","hola que mas","que hubo","que puedo pedir","quiero ver una pelicula", "quiero una peli","quiero tener una pelicula","quiero ver peliculas","quiero unas peliculas","quiero ver una película", "que tiene","quiero pedir una peli", "quiero alguna pelicula","qué tipo de pelicula tiene","que genero maneja","deseo ver cualquier pelicula","deseo ver una película","deseo ver una pelicula","queremos peliculaa","queremos ver una pelicula"],
    ["como estas?", "que tal", "como has estado","como ha estado", "como se encuentra","como esta","como estas",],
    ["que estas haciendo", "que ha pasado", "que pasa"],
    ["cuantos años tienes","que edad tienes",],
    ["quien eres","con quien hablo","quien es usted","es humano","quien me contesta", "eres humana", "eres un robot", "eres humano o robot","eres inteligente","eres un chat inteligente","eres un bot", "puedes pensar"],
    ["quién te creó", "quién te hizo","quien te creó", "quien te hizo","quien te creo", "de donde saliste","fuiste creada", "alguien te creó","alguien te creo", "de donde saliste"],
    [ "su nombre por favor", "tu nombre", "cual es su nombre", "cual es tu nombre",  "como te llamas", "como se llama usted", "como se llama", "me regala su nombre" ], 
    ["horror", "terror", "de miedo", "suspenso", "terrorífica","malefica"],
    ["duque la duquesa", "duque", "duquesa", "Duquesa", "Duque", "cerdo", "castillo", "Castillo", "CASTILLO"],
    ["romance", "Amor", "AMOR", "Romance", "amor","romanse", "pareja", "novios", "parejas", "drama", "Drama", "novia", "Novias","ROMANCE"],
    ["Titanic", "titanic", "lo que el viento se llevó", "lo que el viento se llevo", "el viento", "VIENTO","TITANIC"],
    ["acción", "ciencia ficción", "accion", "acion", "ficcion","adrenalina", "FICCION", "ACCION", "Ficción", "Acción"],
    ["Espías", "espías", "ESPÍAS", "espias", "ESPIAS", "plaza","Plaza", "plasa", "La Plaza"],
    ["comedia", "COMEDIA", "Comedia", "chistes", "Chistes","Chistosa", "chistosa", "graciosa", "graciosas", "Graciosa", "CHISTOSA", "GRACIOSA"],
    ["Rata", "la rata", "ratas", "RATA", "Raton", "ratón","rrata", "fan", "fan","FUN", "FAN", "faan"],
    ["familia", "Familiar", "FMILIAR", "FAMILIA", "Familia","niños", "infantiles", "Niños", "niñas", "Infantil", "infantíl", "INFANTILES"],
    ["GOYO", "Goyo", "goyo", "gollo", "guyo", "promrsas","promesa", "Promesa", "PROMESAS","PROMESA", "Promesas", "giyo"],
    ["para 4","cuatro","cuatro personas","para 2","para dos", "dos personas", "2 personas","2","para 3","para tres", "tres personas", "3 personas","3","para 5","para cinco", "cinco personas", "5 personas","5","para 6","para seis", "seis personas", "6 personas","6" ],
    ["adiós", "hasta pronto", "hasta luego", "nos vemos luego","feliz día", "chao"],
  ];
  
  // Estas son respuestas de bot, emparejadas en orden con las frases 'activadoras' anteriores
  const reply = [
    ["Bienvenido a peliculas Hanje... ¿Qué género de película quiere ver ?!", "Hola Bienvenido a películas Hanje... ¿qué tipo de pelicula quieres ver?!", "Hola hablas con Hanje su chatbot inteligente... ¿qué genero quieres ver?!"],
    [ "bien, graias", "muy bien", "Fantástico, "],
    [ "no mucho", "hablando contigo", "Soy un robot, no siento", "solo soy un chatbot"],
    ["quiero creer que soy joven"],
    ["solo soy un bot y me gusta hablar contigo", "soy Hanje tu bot inteligente. y tu?","soy un bot inteligente", "soy un bot inteligente y me encanta hablar con humanos"],
    ["soy un bot desarrollado por humanos exageradamente inteligentes","fui creada por un humano y mi padre, JavaScript","¿sabes la historia de la abeja y la cigüeña? ........ pues yo no nací así, me crearon con javascript"],
    ["Hanjebot", "soy Hanje"],
    ["que bien tenemos Duque la Duquesa y El castillo ¿cuál quiere ver?"],
    ["Esa es muy buena, buena elección ¿para cuántas personas es la peli?"],
    ["que bien tenemos Titanic y lo que el viento se llevó ¿cuál quiere ver?"],
    ["Esas es muy linda , buena elección ¿para cuántas personas es la peli?"],
    ["que bien tenemos Espías y La plaza ¿cuál quiere ver?"],
    ["Esas es muy linda , buena elección para cuántas personas es la peli?"],
    ["que bien tenemos Rata y Fan ¿cuál quiere ver?"],
    ["Esas es muy graciosa , buena elección ¿para cuántas personas es la peli?"],
    ["que bien tenemos Goyo y Promesas ¿cuál quiere ver?"],
    ["Esas es muy buena , buena elección ¿para cuántas personas es la peli?"],
    ["listo, se ha reservado, quieres algo"]
    ["Adios", "hasta pronto", "luego nos vemos","hasta luego"],
  ];
  
  // Este es un pequeño conjunto de 'capturar todo' básicamente al azar para cualquier cosa que el usuario ingrese fuera de las posibles frases desencadenantes
  
  const alternative = [
    "si eeee...",
    "ok...",
    "umm...",
    "que?",
    "no entendí..."
  ];
  
  // El mismo propósito que la "alternativa" pero un intento de ser culturalmente relevante ;)
  
  const coronavirus = ["Please stay home"];
  
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
    u.lang = "es-spanish";
    u.volume = 1; //0-1 interval
    u.rate = 1;
    u.pitch = 1; //0-2 interval
    synth.speak(u);
    debugger
  }

  

















