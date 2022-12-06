const wishContainer = document.querySelector('#wish-container')
const form = document.querySelector('form')

const baseURL = 'http://localhost:4321/wishes'
const wishesCallback = ({data: wishes}) => displayWishes(wishes)
const errCallback = err => console.log(err)

const getAllWishes = () => axios.get(baseURL).then(wishesCallback).catch(errCallback)
const addWishes = body => axios.post(baseURL, body).then(wishesCallback).catch(errCallback)
const deleteWish = id => axios.delete(`${baseURL}/${id}`).then(wishesCallback).catch(errCallback)
const rankWish = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(wishesCallback).catch(errCallback)

//step 1:  select elements

// const genieBtn = document.getElementById("genieBtn")
// const wishBtn = document.getElementById("wishBtn")
// const wishDisplay = document.getAnimations('wishDisplay')
// const genieDisplay = document.getElementById("genieImg")
// //step 2: write out function

// const genie = ()=> {
//     let genieSection = document.createElement('section')
//     genieSection.classList.add("geniePic")
//     genieSection.innerHTML = `
//     <div>
//     <img src="https://lwlies.com/wp-content/uploads/2016/11/aladdin-genie-robin-williams-1108x0-c-default.jpg"/>
//     </div>
//     `
//     genieDisplay.appendChild(genieSection)


// const getWishes = () => {
//     console.log('getWishes hit')
//     axios.get(`${baseURL}`)
//     .then((res) => {
//         displayWishes(res.data)
//        console.log(res.data)
//     })
//     .catch((err) => console.log(err))
// };



// const addWishes = (bodyObj) => {
    
//     console.log(bodyObj)
//     axios.post(`${baseURL}`, bodyObj)
//     .then(res => {
//         displayWishes(res.data)
//         console.log(res.data)
//     })
//     .catch((err) => console.log(err))
// };

// const deleteWish = (id) => {
//     console.log(id)
//     axios.delete(`${baseURL}/${id}`)
//     .then((res) => {
//         displayWishes(res.data)
        
//     })
//     .catch((err) => console.log(err))
// };

// const rankWish = (id, type) => {
//     axios.put(`${baseURL}/${id}`, {type}).then(wishesCallback).catch(errCallback)
//     // .then((res) => {
    //     displayWishes(res.data)
    // })
    // .catch((err) => console.log(err))
//};

const submitHandler = (e) => {
    e.preventDefault()
    
    let wish = document.querySelector('#wishInput')
    let pictureURL = document.querySelector('#pictureInput')
    let rank = document.querySelector('input[name="rank"]:checked')
    
    
    const bodyObj = {
        name: wish.value,
        rank: rank.value,
        pictureURL: pictureURL.value
        
    }
    addWishes(bodyObj)
    
    wish.value = ''
    pictureURL.value = ''
    rank.checked = false

}

const createWishCard = (wish) => {

    //const wishContainer = document.querySelector('#wish-container')
    const wishCard = document.createElement('div')
    wishCard.classList.add('wish-card')

    wishCard.innerHTML = `
    <img alt='wish cover' src=${wish.pictureURL} class="wish-cover"/>
    <p class="name">${wish.name}</p> 
    <div class="btns-container">
    <button id="plus" onclick="rankWish(${wish.id}, 'minus')">-</button>
    <p class="wish-rank">${wish.rank} stars</p>
    <button id="minus"  onclick="rankWish(${wish.id}, 'plus')">+</button>
    </div>
    <button id="delete" onclick="deleteWish(${wish.id})">delete</button>
    `
    wishContainer.appendChild(wishCard)

}

const displayWishes = (arr) => {
  // const wishContainer = document.querySelector('#wish-container')
    wishContainer.innerHTML =  ``
    for (let i = 0; i < arr.length; i++) {
        createWishCard(arr[i])
    }
}



form.addEventListener('submit', submitHandler)



//step 3: combine 1 and 2 with event listener

// genieBtn.addEventListener('click', genie)



getAllWishes()