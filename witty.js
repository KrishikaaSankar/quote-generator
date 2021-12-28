function generate(){
    const quotes={
        "-Mark Twain" : '"Whenever you find yourself on the side of the majority, it is time to pause and reflect."' , 
        "-Louisa May Alcott" : '"Conceit spoils the finest genius."' ,
        "-Ruskin Bond" : '"You cannot take the love but spurn the lover!"' , 
        "-W.H.Auden" : '"We are all here on earth to help others; what on earth the others are here for I do not know."' , 
        "-Anthony Burgess" : '"Laugh and the world laughs with you, snore and you sleep alone."' , 
        "-Pablo Picasso" : '"I would like to live like a poor man— only with lots of money."' , 
        "-Mark Twain" : '"Get your facts first, then you can distort them as you please."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}