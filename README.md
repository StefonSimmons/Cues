# Cues
NYC Film TV and Theater Activity App

## Description

"Cues" allows you to get quick data regarding film, television, and theater production activity in New York City. Select a NYC borough and at the flip of a card, filter through date ranges and discover the most popular location and time of year for the dramatic arts' exclusive use of NYC properties. 

## SODA API and Data Set

This web application utilizes a NYC OpenData Dataset for Film Permits via the Socrata Open Data API (SODA).

JSON Data Snippet: [I'm an inline-style link] (https://data.cityofnewyork.us/resource/tg4x-b46p.json)
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

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

Desktop View `Wireframe` (via whimsical.com):
[I'm an inline-style link] (https://whimsical.com/QuupJuv7BxbETHKvdrdbqv)

Mobile View `Wireframe` (via whimsical.com):
[I'm an inline-style link] (https://whimsical.com/Y7KC2D93vuwE4Va4eUaQ5L)

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
|April 6th| Project Approval / Begin Core Application Structure (HTML and CSS layout) | Incomplete
|April 7th| Complete core app layout for "home", "about" and "contact" pages / Begin Javascript(JS) development (GET API, "click" Event Listeners working | Incomplete
|April 8th| Complete JS dev. (quick look card). Complete the Date Range filter | Incomplete
|April 9th| Test functionality and design with another other user / Stylize (CSS) further | Incomplete
|April 10th| Present hosted website | Incomplete

## Priority Matrix

`Time and Importance` Matrix (via docdroid):

[I'm an inline-style link] (https://docdro.id/Q4s1toO) 


## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Borough Cards | M | 3hrs| - | - |
| Nav Bar | L | 2hrs| - | - |
| Hamburger Menu | L | 2hrs | - | - |
| About and Contact Content | L | 1hr | - | - |
| Flip Card Functionality | H | 5.5hrs | - | - |
| Quick Look Cards | H | 6hrs | - | - |
| Further Stylize Site | L | 2hrs | - | - |
| Total | H | 21.5hrs| - | - |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  