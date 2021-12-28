function generate(){
    const quotes={
        "-Louisa May Alcott" : '"...for love casts out fear, and gratitude can conquer pride."' , 
        "-Ruskin Bond" : '"Love is always fleeting, abird on the wing."' ,
        "-Ruskin Bond" : '"You cannot take the love but spurn the lover!"' , 
        "-Mother Teresa" : '"If you judge people, you have no time to love them."' , 
        "-Helen Keller" : '"The best and most beautiful things in this world cannot be seen or even heard but must be felt with the heart."' , 
        "-Rabindranath Tagore" : '"He who wants to do good knocks at the gate: he who loves finds the door open."' , 
        "-William Shakespeare" : '"The course of true love never did run smooth."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}