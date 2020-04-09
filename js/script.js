//HAMBURGER MENU//

const hamburgerIcon = document.querySelector("#hamburger")
const menu = document.querySelectorAll(".menu")
menu.forEach(link => {
  link.addEventListener("mouseover", showNav)
  link.addEventListener("mouseout", showNav)
})
hamburgerIcon.addEventListener("mouseover", showNav)
hamburgerIcon.addEventListener("mouseout", showNav)
// hamburgerIcon.addEventListener("click", showNav)

function showNav() {
  const bars = document.querySelector(".fa-bars")
  const hamburger = document.querySelector("#hamburger")
  let ul = document.querySelector('ul')
  let navigation = document.querySelectorAll("ul > li")
  
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


// GET API & 'QUICK LOOK' DOM MANIPULATION//

// FOR CARD FLIP ⬇//

const boroughCard = document.querySelectorAll(".borough-card")
boroughCard.forEach(b => {
  let flippedCard = b.addEventListener("click", function() {
    b.classList.toggle("flipped-card")
  })
})

// THIS IS SO I/USER CAN ENTER A DATE WITHOUT FLIPPING THE CARD AGAIN //
const quickLookHeader = document.querySelectorAll(".qlheader")
quickLookHeader.forEach(q => {
  q.addEventListener("click", function (e) {
    e.stopPropagation()
  })
})

// FOR CARD FLIP ⬆//

const cardImg = document.querySelectorAll(".card-img")
cardImg.forEach(c => {
  // console.log(c.getAttribute("value")) //printing all card values before click event
  let activeCard = c.addEventListener("click", getCardValue) 
})

function getCardValue(e) {
  activeCardValue = e.target.getAttribute("value") // e.target represents the clicked element's value
  console.log(activeCardValue) //printing cardvalue for every clicked borough
  getDates(activeCardValue)
}

function getDates(activeCardValue) {
  let startDateValue = document.querySelector(`#${activeCardValue.replace(" ", "-")}-start-date`).value
  let endDateValue = document.querySelector(`#${activeCardValue.replace(" ", "-")}-end-date`).value
  showPermits(startDateValue, endDateValue, activeCardValue)
}

const filterBtn = document.querySelectorAll(".filter-btn")
filterBtn.forEach(f => {
  console.log(f.getAttribute("value")) //prints btn value ex-"Manhattan" before click event
  let factiveCard = f.addEventListener("click", getFilteredCardValue)  
})

function getFilteredCardValue(e) {
  filterBtnValue = e.target.getAttribute("value") // e.target represents the clicked element's value
  console.log(filterBtnValue) //printing cardvalue for every clicked borough
  filterDates(filterBtnValue)
}

function filterDates(filterBtnValue) {
  console.log(filterBtnValue)
  startDateValue = document.querySelector(`#${filterBtnValue}-start-date`).value
  endDateValue = document.querySelector(`#${filterBtnValue}-end-date`).value
  showPermits(startDateValue, endDateValue, filterBtnValue)
}


async function showPermits(startDate, endDate, activeCard){
  try {
    
    const APP_TOKEN = "$$app_token=ochrLWXPVMqZqCBPzpkjlhzZI"
    const DOMAIN = `https://data.cityofnewyork.us/resource/tg4x-b46p.json`;
    let URL = `${DOMAIN}?borough=${activeCard.replace("-"," ")}&$where=startdatetime between '${startDate}T00:00:00' and '${endDate}T00:00:00'&${APP_TOKEN}`

    let results = await axios.get(URL)
    const permitData = results.data
    console.log(permitData) // printing an array of specific borough/card data for every card 

    activeCard = activeCard.replace(" ", "-") // for Staten Island
    
    const film = permitData.filter(boroughPermits => boroughPermits.category === 'Film' ).length //play around with the === and == and = //
    const boroughFilms = document.querySelector(`.${activeCard}-Film`)
    boroughFilms.innerHTML = film

    const television = permitData.filter(boroughPermits => boroughPermits.category === 'Television' ).length //play around with the === and == and = //
    const boroughTV = document.querySelector(`.${activeCard}-Television`)
    boroughTV.innerHTML = television

    const theater = permitData.filter(boroughPermits => boroughPermits.category === 'Theater' ).length //play around with the === and == and = //
    const boroughThea = document.querySelector(`.${activeCard}-Theater`)
    boroughThea.innerHTML = theater

    const total = permitData.filter(boroughPermits => boroughPermits.category).length //play around with the === and == and = //
    const boroughTotal = document.querySelector(`.${activeCard}-total`)
    boroughTotal.style.fontWeight = "700"
    boroughTotal.innerHTML = total
    
    const other = total - (film + television + theater) //play around with the === and == and = //
    const boroughOther = document.querySelector(`.${activeCard}-other`)
    boroughOther.innerHTML = other

  } catch (error){
      console.log(`Oops! There was an error: ${error}`)
  }
}


