//HAMBURGER MENU//

const hamburgerIcon = document.querySelector(".icon")
hamburgerIcon.addEventListener("click", showNav)

function showNav() {
  const bars = document.querySelector(".fa-bars")
  const hamburger = document.querySelector("#hamburger")
  let ul = document.querySelector('ul')
  let navigation = document.querySelectorAll("ul > li")

  bars.style.color = "rgb(10, 12, 20)"
  hamburger.style.backgroundColor = "rgb(150, 144, 146)"
  hamburger.style.justifyContent = "center"
  ul.style.textAlign = "right"
  navigation.forEach(link => {
    if (link.style.display === "") {
      link.style.display = "block"
      link.style.padding = "20px"
    } else {
      link.style.display = ""
    }
  })
}
//HAMBURGER MENU//


// GET API & QUICK LOOK DOM MANIPULATION//

const cardImg = document.querySelectorAll(".card-img")

cardImg.forEach(c => {
  console.log(c.getAttribute("value")) //printing all card values
  const activeCard = c.addEventListener("click", getCardValue) 
})

// const list1 = [[2, 3, 5, 6], [3, 6, 7, 8, 9], [1, 8, 7, 8]]

// list1.forEach(e1 => {
//   // console.log(e1)
//   e1.forEach(e2 => {
//     console.log (e2)
//   })
// })

function getCardValue(e) {
  cardValue = e.target.getAttribute("value") // e.target represents the clicked element
  console.log(cardValue) //printing cardvalue for every clicked borough
  showPermits(cardValue)
}


async function showPermits(activeCard){
  try {
    
    const APP_TOKEN = "&$$app_token=ochrLWXPVMqZqCBPzpkjlhzZI"
    const DOMAIN = `https://data.cityofnewyork.us/resource/tg4x-b46p.json?`;
    let URL = `${DOMAIN}borough=${activeCard}${APP_TOKEN}`

    let results = await axios.get(URL)
    const permitData = results.data
    // console.log(permitData) // printing an array of specific borough/card data for every card 

    permitData.forEach(boroughPermits=> {
      // console.log(boroughPermits) //prints each element from the list
      const films = boroughPermits.category = "Film"
      films
      const manhattanFilms = document.querySelector(`.${activeCard}-Film`)
      manhattanFilms.innerHTML = films.length
    })
  

  } catch (error){
      console.log(`Oops! There was an error: ${error}`)
  }
}