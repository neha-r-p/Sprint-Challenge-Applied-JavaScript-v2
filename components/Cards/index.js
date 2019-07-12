// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log('The API is currently down, try again later', err)
    })

function createCard(data){
    const card = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthor.classList.add('author')
    imgContainer.classList.add('img-container')

    articleHeadline.textContent = data.headline //change path to get actual headline
    authorImg.src = data.authorPhoto //change path 
    authorName.textContent = `By: ${data.authorName}` //change path

}