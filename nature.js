function generate(){
    const quotes={
        "-Henry David Thoreau" : '"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth."' , 
        "-Ruskin Bond" : '"And until death comes, all is life."' ,
        "-William Shakespeare" : '"Nature can make the whole world family members by a single touch."' , 
        "-Percy Bysshe Shelley" : '"If winter comes, can spring be far behind!"' , 
        "-Winston Churchill" : '"If solitary trees grow at all, they grow to be very strong."' , 
        "-Ralph Waldo Emerson" : '"The laughter of the earth can be seen in flowers."' , 
        "-Henry David Thoreau" : '"The sky is carried on its back by a bluebird."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}