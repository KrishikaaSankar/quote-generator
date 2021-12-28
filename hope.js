function generate(){
    const quotes={
        "-Louisa May Alcott" : '"Be comforted, dear soul! There is always light behind the clouds."' , 
        "-Ruskin Bond" : '"There is space for the big and the small, for you and me and the ladybird."' ,
        "-Rupi Kaur" : '"Nothing lasts forever; let that be the reason you stay; even this sick twisted misery will not last."' , 
        "-Alfred Tennyson" : '"Hope smiles from the threshold of the year to come, whispering ‘it will be happier…"' , 
        "-Helen Keller" : '"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."' , 
        "-Albert Einstein" : '"Learn from yesterday, live for today, hope for tomorrow. The important things is not to stop questioning."' , 
        "-Dalai Lama" : '"I find hope in the darkest of days, and focus in the brightest. I do not judge the universe."'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}