function getSimpsonQuote() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=1`;
    axios.get(url)
        .then(function(reponse) {
            return reponse.data;
        })
        .then(function(simpson) {
            console.log('data decoded from JSON:', simpson);

            const simpsonQuote = `
                <p><strong>From ${simpson[0].character}</strong></p>
                <p>Quote : ${simpson[0].quote}</p>
            `
            const paragraphe = document.createElement('div');
            paragraphe.innerHTML = simpsonQuote;
            document.getElementById('simpson').appendChild(paragraphe);
        });
}

getSimpsonQuote();

document.getElementById("addCitation").addEventListener('click', () => {
    getSimpsonQuote();
})