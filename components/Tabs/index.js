// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
        console.log(data)
        topics.appendChild(tabComponent(data.data))
    })
    .catch(err => {
        console.log('The API is currently down, try again later', err)
    })

function tabComponent(data){
    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = data.topics

    return tab;


}