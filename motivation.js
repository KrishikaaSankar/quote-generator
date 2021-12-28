function generate(){
    const quotes={
        "-George Patton" : '"Success is how high you bounce when you hit bottom."' , 
        "-Ralph Waldo Emerson" : '"Our greatest glory is not in never failing, but in rising up everytime we fail."' ,
        "-Lewis Carroll" : '"It takes all the running you can do, to keep in the same place. If you want to get somewhere else, you must run atleast twice as fast as that."' , 
        "-Satya Naraya Nadella" : '"If you are not learning new things, you stop doing great and useful things."' , 
        "-Zig Ziglar" : '"Discipline yourself to do the things you need to do when you need to do them, and the day will come when you will be able to do the things you want to do when you want to do them!"' , 
        "-Steve Jobs" : '"It is only by saying "No" that you can concentrate on the things that are really important."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}