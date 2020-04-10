# Cues
NYC Film TV and Theater Activity App

## Description

"Cues" allows you to get quick data regarding film, television, and theater production activity in New York City. Select a NYC borough and at the flip of a card, filter through date ranges and discover the most popular location and time of year for the dramatic arts' exclusive use of NYC properties. 

## SODA API and Data Set

This web application utilizes a NYC OpenData Dataset for Film Permits via the Socrata Open Data API (SODA).

JSON Data Snippet: https://data.cityofnewyork.us/resource/tg4x-b46p.json
```
[
    {
        "eventid": "525279",
        "eventtype": "Shooting Permit",
        "startdatetime": "2020-01-05T00:01:00.000",
        "enddatetime": "2020-02-04T23:59:00.000",
        "enteredon": "2020-01-02T09:57:53.000",
        "eventagency": "Mayor's Office of Film, Theatre & Broadcasting",
        "parkingheld": "AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET,  AMSTERDAM AVENUE between WEST   62 STREET and WEST   65 STREET",
        "borough": "Manhattan",
        "communityboard_s": "7",
        "policeprecinct_s": "20",
        "category": "Television",
        "subcategoryname": "Not Applicable",
        "country": "United States of America",
        "zipcode_s": "10023"
    }
]
```

## Wireframes & Most Viable Product (MVP)

Uploaded images of the Cues wireframe:

Desktop View `Wireframe` (via whimsical.com):
https://whimsical.com/QuupJuv7BxbETHKvdrdbqv

Mobile View `Wireframe` (via whimsical.com):
https://whimsical.com/Y7KC2D93vuwE4Va4eUaQ5L

#### MVP 

- Content (HTML) and Style (CSS) 
- Accessible "About" and "Contact" pages
- Accessible card(s) via card flips (vertical or horizontal)
- 'Quick Look' card (GET API data on number of film, TV and theater productions in NYC to appear on card).
- Date filter on 'quick look' card for dynamic data presentation on each of the 5 borough "cards"

#### PostMVP 

- Add data visualization via a map API showing the quantity of productions per neighborhood/zipcode
- Social networking services 
  - user account registration (film, tv, and theater permit holders only)
  - share stories among eachother

## Project Schedule

The following schedule is used to track the development process of the web app, "Cues":  

|  Day | Deliverable | Status
|---|---| ---|
|April 3rd| Project Prompt | Complete
|April 4th - 5th| Wireframes / Define MVP / Priority Matrix / Define Functional Components | Complete
|April 6th| Project Approval / Begin Core Application Structure (HTML and CSS layout) | Complete
|April 7th| Complete core app layout for "home", "about" and "contact" pages / Begin Javascript(JS) development (GET API, "click" Event Listeners working | Complete
|April 8th| Complete JS dev. (quick look card). Complete the Date Range filter | Complete
|April 9th| Test functionality and design with another user / Stylize (CSS) further | Complete
|April 10th| Present hosted website | Incomplete

## Priority Matrix

`Time and Importance` Matrix (via docdroid):

https://docdro.id/Q4s1toO


## Timeframes

Timeframes for the development of Cues.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Borough Cards | M | 3hrs| 2hrs | 2hrs |
| Nav Bar | L | 2hrs| 2hrs | 2hrs |
| Hamburger Menu | L | 2hrs | 5hrs | 5hrs |
| About and Contact Content | L | 2hrs | 2hrs | 2hrs |
| Flip Card Functionality | H | 6hrs | 4hrs | 4hrs |
| Quick Look Cards | H | 6hrs | 3hrs | 3hrs |
| Further Stylize Site | L | 2hrs | 6hrs | 6hrs |
| Filter API data through Boroughs (JS work) | H | 5hrs | 8hrs | 8hrs |
| Working with API | H | 4hrs | 4hr | 4hrs |
| Debug | H | 4hrs | 8hrs | 8hrs |
| Total | H | 36hrs| 44hrs | 44hrs |

## Code Snippet 

A code snippet of functionalty that I'm proud of:

```
//THIS FLIPS THE CARD UPON A CLICK

const boroughCard = document.querySelectorAll(".borough-card")
boroughCard.forEach(b => {
  let flippedCard = b.addEventListener("click", function() {
    b.classList.toggle("flipped-card")
  })
})

// THIS FUNCTION STOPS THE BUBBLING UP EFFECT ON THE SPECIFIC CHILD ELEMENT (class = qlheader) OF THE 
// CARD WHEN THE PARENT/GRANDPARENT IS CLICKED. SO, PRACTICALLY, THIS ALLOWS THE USER TO 
// ENTER A DATE WITHOUT CALLING THE FLIPPING EVENT ON THE CARD

const quickLookHeader = document.querySelectorAll(".qlheader")
quickLookHeader.forEach(q => {
  q.addEventListener("click", function (e) {
    e.stopPropagation()
  })
})
```

## Change Log
 This section documents any changes made to the app that are not represented in the MVP or PMVP 
  
