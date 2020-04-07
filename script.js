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

// GET API //

const card = document.querySelector("card-front")
const cardView = card.addEventListener("click", showPermits) 
  
async function showPermits(){
  try {
    // format: domain
    const activeBorough = cardView.value
    console.log(activeBorough)
    const KEY = 
    const APP_TOKEN = "$$app_token=ochrLWXPVMqZqCBPzpkjlhzZI"
    const DOMAIN = `https://data.cityofnewyork.us/resource/tg4x-b46p.json?`;
    const URL = `${DOMAIN}${activeBorough}=${APP_TOKEN}`

    let results = await axios.get(URL)
    const permitData = results.data
    console.log(permitData)
  
  } catch (error){
      console.log(`Oops! There was an error: ${error}`)
  }
}