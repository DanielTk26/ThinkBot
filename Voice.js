const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
   
    
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    
    var speech = new SpeechSynthesisUtterance();
    speech.text = 'ok';
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    if(text.includes('date'))
    speech.text = 'It is '+new Date().getDay() + " " + new Date().getMonth()+  " " + new Date().getFullYear()+" right now";
    else if(text.includes('my birthday'))
    speech.text = 'Do you think you\'re famous! How would I know your birthday!';
    else if(text.includes('love me'))
    speech.text = 'I am an AI system not a human.';
    else if(text.includes('Elon Musk'))
    speech.text = 'Elon Reeve Musk FRS is a business magnate, industrial designer, engineer, and philanthropist. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI';
    else if(text.includes('Daniel Thomas'))
    speech.text = 'Daniel Thomas is the one who created me. He is a talented boy of 13 ';
    else if(text.includes('hai'))
    speech.text = 'Hi There !!! ';
    else if(text.includes('your name'))
    speech.text = 'My name is ThinkBot. I am Daniels Personal AI assistant ';
    else if(text.includes('AI'))
    speech.text = 'Why Yes. Yes I am';
    else if(text.includes('hello'))
    speech.text = 'Hi There !!! ';   
    else if(text.includes('hi'))
    speech.text = 'Hi There !!! ';   
    else if(text.includes('ok'))
    speech.text = 'Ok then !!!';
    else if(text.includes('thank you'))
    speech.text = 'You are Welcome !!!';
    else if(text.includes('you are'))
    speech.text = 'Thank You I keep working on my skills';
    else if(text.includes('you are'))
    speech.text = 'Thank You I keep working on my skills';
    else if(text.includes('love you'))
    speech.text = 'I am an AI system not a human.';
    else if(text.includes('good morning'))
    speech.text = 'Good Morning!!!';
    else if(text.includes('good afternoon'))
    speech.text = 'Good Afternoon!!!';
    else if(text.includes('good night'))
    speech.text = 'NightyNight!!!';
    else if(text.includes('who are you'))
    speech.text = 'I am Daniel\'s AI assistant. He calls me ThinkBot';
    else if(text.includes('WhatsApp'))
    window.open('https://web.whatsapp.com/');
    else if(text.includes('roblox'))
    window.open('https://www.roblox.com/home');
    else if(text.includes('Gmail'))
    window.open('http://gmail.com/');
    else if(text.includes('GitHub'))
    window.open('https://github.com/');
    else if(text.includes('YouTube'))
    window.open('https://www.youtube.com/');
    else if(text.includes('coding class'))
    window.open('https://code.whitehatjr.com/s/dashboard');
    
    window.speechSynthesis.speak(speech);

}