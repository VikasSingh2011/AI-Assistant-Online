// Speech recognition setup    
const recognition = new(window.SpeechRecognition ||
    window.webkitSpeechRecognition)();//It's working is that they listening the command which are speek through by the user.
recognition.lang= "en-US";//by using this we have added  language in a Speech Recognition.
// console.log(recognition);

const btn = document.querySelector("#listen-btn");
btn.addEventListener("click", function() {//attach click event listener to the button
    // recognition.start();
    function speak(text){// convert text into  voice format
        const utterance = new SpeechSynthesisUtterance(text);//they convert text in form of the voice.
        window.speechSynthesis.speak(utterance);// they speak the text.
    }
    
    function handleCommand(command){//this is used to handle the command which user speak.
        if(command.includes("open youtube ")){
            speak("Opening Youtube...")// AI speak this
            window.open("https://www.youtube.com", "_blank");//this is the link by which youtube open.
        }
        else if(command.includes("open facebook ")){
            speak("Opening Facebook...")
            window.open("https://www.facebook.com", "_blank");
        }
        else if(command.includes("open instagram ")){
            speak("Opening instagram...")
            window.open("https://www.instagram.com", "_blank");
        }
        else if(command.includes("open google ")){
            speak("Opening google...")
            window.open("https://www.google.com", "_blank");
        }
        else if(command.includes("open whatsapp ")){
            speak("Opening whatsapp...")
            window.open("https://www.whatsapp.com", "_blank");
        }
        
        else{// Perform a Google search if command not recognized
            speak("Search on Google for " + command);
            window.open(
                `https://www.google.com/search?q=${encodeURIComponent(command)}`,
        "_blank"
            );
        }
    }
    //Greet the user and then start listening
    speak("Hello,how can I help you?");
     // Delay to ensure greeting completes before starting recognition
    setTimeout(() => {
        btn.innerHTML= "Listening...👂";
        btn.classList.add("listening");
        recognition.start();
    },2500);
    
    //when result is received.
    recognition.onresult =(event) => {
        console.log(event);
      const command = event.results[0][0].transcript.toLowerCase();
      handleCommand(command);
    };

    //when recognition ends
    recognition.onend = () => {
        btn.innerHTML= "Start Listening";
        btn.classList.remove("listening");
    };
});