# A simple React countdown timer, set in minutes. 

## Development

Install dependencies via yarn:

```
yarn
```

Or with `npm`:

```
npm install
```

To run the server, run:
```
yarn start
```
and point your browser to `http://localhost:8080`

## Screenshots

![Initial state](https://raw.github.com/brandonprs/timer/master/public/images/initial.png)
![Changed](https://raw.github.com/brandonprs/timer/master/public/images/change.png)
![Submitted](https://raw.github.com/brandonprs/timer/master/public/images/submitted.png)
![Red](https://raw.github.com/brandonprs/timer/master/public/images/red-text.png)
=======
# The Time is Nigh
A simple countdown timer written in React as a demonstration. 

## Table of Contents
- [Features](#Features)
    - [Requested](#Requested)
    - [Additions](#Additions)
- [Code](#Code)
- [Aesthetics](#Aesthetics)
- [Gallery](#Gallery)

## Features
Being that this app was made primarily as the result of demonstrating my competency with React.js by interested party according to their specifications, I have included the specifications below and as is my habit, added a flare of my own to the application that didn't compromise or modify these requests. 
### Requested
| Requirement | Completed? |
|-------------|------------|
| Accepts User Entry | [x] |
| Provides Start Button | [x] |
| Uses MM:SS format | [x] |
| Provides Pause & Resume Functionality | [x] |
| Provides 3 tiers of speed | [x] |
| Displays half-way message | [x] |
| Displays Time's Up Message | [x] |
| Clock digits become red under 20 seconds | [x] |
| Clock Digits blink at 10 seconds | [x] |
| Functionality is divided into components | [x] |
| Production ready appearance | [x] |
| Hosted in public GitHub repo | [x] |
  
### Additions
    
| Additional Feature | Explanation |
|--------------------|-------------|
| SVG logo for site | the rotation makes it easier to look at the page |
| React-Bootstrap Components | Included for responsiveness and rapid development |
| Vercel Hosted Example |  |
| SVG Backgrounds by HeroPatterns | These backgrounds add a nice, modern visual flare to the site, providing texture to the interface |

## Code
The source code contained here within this repository is split up into components, per request, according to the layout of the site and inter-relations of the function. I have moved all of the styled components into one file, which might affect the site's conformity with *atomic design* but being that the styled components are specifically called within the site 

