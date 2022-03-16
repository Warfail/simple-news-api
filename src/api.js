const searchFrom = document.querySelector('.d-flex');
const input = document.querySelector('.form-control');
const newsList = document.querySelector('.news-list');

console.log(newsList)

searchFrom.addEventListener('submit', retrieve)

function retrieve(e) {

    e.preventDefault();
    const apiKey= 'c65930e9527940d188daf2b67e1b27d2' 
    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res) => {
        return res.json()
    }).then((data)=>{
        console.log(data)

        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent= article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        })
    })




    console.log(topic)
}