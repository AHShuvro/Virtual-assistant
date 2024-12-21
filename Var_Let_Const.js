let yourTalk = document.getElementById('your-talk');

function speak(text) {
    const textToSpeak = new SpeechSynthesisUtterance(text);

    textToSpeak.lang = 'en-US';
    textToSpeak.rate = 1;
    textToSpeak.pitch = 1;
    textToSpeak.volume = 1;
    window.speechSynthesis.speak(textToSpeak);
}

const wishMe = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good morning, Sir!");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon, Sir!");
    } else {
        speak("Good evening, Sir!");
    }
}

window.addEventListener("load", () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();

recognition.onresult = (e) => {
    let assisCurrentIndex = e.resultIndex;
    let transcript = e.results[0][0].transcript;
    console.log(e);

    yourTalk.innerHTML = transcript;
    takeCommand(transcript);
}

let talkToAssis = document.getElementById("talk-to-assis");

talkToAssis.addEventListener("click", () => {
    recognition.start();
})

const takeCommand = (command) => {
    command = command.toLowerCase();

    
    if (command.includes('hello') || command.includes('hi') || command.includes('hey')) {
        speak("Hi! What can I help you with?");
    }
    else if(command.includes('who are you')) {
        speak("I am a virtual assistant, created by Shuvro.");
    }
    else if(command.includes('good morning')) {
        speak("Good morning! How can I assist you today?");
    }
    else if(command.includes('good afternoon')) {
        speak("Good afternoon! How can I assist you today?");
    }
    else if(command.includes('good evening')) {
        speak("Good evening! How can I assist you today?");
    }
    else if(command.includes('goodbye') || command.includes('bye')) {
        speak("Goodbye! Have a great day!");
    }
    
    
    else if(command.includes('open youtube')) {
        window.open("https://www.youtube.com");
    }
    else if(command.includes('open google')) {
        window.open("https://www.google.com");
    }
    else if(command.includes('open facebook')) {
        window.open("https://www.facebook.com");
    }
    else if(command.includes('open twitter')) {
        window.open("https://www.twitter.com");
    }
    else if(command.includes('open instagram')) {
        window.open("https://www.instagram.com");
    }
    else if(command.includes('open linkedin')) {
        window.open("https://www.linkedin.com");
    }
    else if(command.includes('open gmail') || command.includes('open email')) {
        window.open("https://www.gmail.com");
    }

    
    else if(command.includes('play music') || command.includes('play song')) {
        speak("Playing music for you.");
        window.open("https://www.youtube.com/results?search_query=music");
    }

    
    else if(command.includes('what is the weather') || command.includes('weather')) {
        speak("Please check your local weather app or website for real-time updates.");
    }

    
    else if(command.includes('what time is it') || command.includes('time')) {
        let time = new Date().toLocaleTimeString();
        speak(`The time is ${time}`);
    }


    else if(command.includes('open notepad')) {
        speak("Opening Notepad.");
        window.open("notepad");
    }
    else if(command.includes('open calculator')) {
        speak("Opening Calculator.");
        window.open("calc");
    }

    else if(command.includes('search') && command.includes('on google')) {
        let query = command.replace("search on google", "").trim();
        let url = `https://www.google.com/search?q=${query}`;
        window.open(url);
    }


    else if(command.includes('tell me a joke')) {
        speak("Why don't skeletons fight each other? They don't have the guts.");
    }
    else if(command.includes('tell a joke')) {
        speak("Why did the scarecrow win an award? Because he was outstanding in his field.");
    }


    else if(command.includes('what is') || command.includes('calculate')) {
        let query = command.replace("what is", "").replace("calculate", "").trim();
        let result = eval(query);
        speak(`The answer is ${result}`);
    }

    else if(command.includes('set an alarm')) {
        speak("Sorry, I can't set alarms at the moment. Please use your phone or computer's alarm feature.");
    }


    else if(command.includes('latest news')) {
        speak("You can check the latest news on websites like BBC, CNN, Al zageera or your preferred news source.");
    }




    else if(command.includes('open wikipedia')) {
        window.open("https://www.wikipedia.org");
    }

    else if(command.includes('open amazon')) {
        window.open("https://www.amazon.com");
    }

    else if(command.includes('open netflix')) {
        window.open("https://www.netflix.com");
    }

    else if(command.includes('how are you')) {
        speak("I am doing great, thank you for asking!");
    }
    else if(command.includes('tell me something interesting')) {
        speak("Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still safe to eat.");
    }
    else if(command.includes('what is your name')) {
        speak("I am a virtual assistant, created by Shuvro.");
    }
    else if(command.includes('open settings')) {
        speak("Opening settings.");
        window.open("ms-settings:");
    }
    else if(command.includes('close tab')) {
        window.close();
    }

    else if(command.includes('open my documents')) {
        window.open("file:///C:/Users/YourUsername/Documents");
    }


    else if(command.includes('shutdown') || command.includes('restart')) {
        speak("Sorry, I cannot perform shutdown or restart on your PC.");
    }


    else {
        speak("Sorry, I didn't quite catch that. Can you say that again?");
    }
}
