# The Time is Nigh
A simple countdown timer written in React as a demonstration. [Hosted Version Here](https://time-is-nigh.vercel.app/)

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
| Vercel Hosted Example | In order to determine the production readiness of the site, I took advantage of JAMstack technology and deployed the site availabe [here](https://time-is-nigh.vercel.app/) |
| SVG Backgrounds by HeroPatterns | These backgrounds add a nice, modern visual flare to the site, providing texture to the interface |
| ESLint | Configured to be compliant or break, this forces the code to be written with best practices and a standard other than my own guiding it. |

## Code
The source code contained here within this repository is split up into components, per request, according to the layout of the site and inter-relations of the function. I have moved the various styled components into one file, which might affect the site's conformity with *atomic design*, but the components specifically call these specific styled components as needed, so it doesn't reduce the overall individualized and specific nature of the styling. While originally a stalwart of SCSS as my pre-processor of choice, I am being won over by the Styled Components method as it enables the use of JS logic in the stylesheet itself while reducing the need for class and ID insanity. 

The utility of using React and JSX is putting the Javascript logic, and the structure (HTML) associated with it in the same file, which I did not tease out of the code, even after teasing out the styling as mentioned above. This has meant though, that I have left several components as large chunks instead of splitting them up into the tiny portions that they easily could have been split into. This was done to ease in the reading of the application to evaluate its logic however several components could have been made up of the components here present, laid out in the table below. 

| Component | Potential Component(s) |
|-----------|------------------------|
| Clock | Rate Group, Time Display Text, Play Button, Pause Button |
| Header | Logo, Text |
| Footer | Link, Small Logo |
| InputForm |  Start/Reset Button |

## Aesthetics 
The design of the site uses HeroPattern's SVGs as backgrounds, as mentioned above, as the primary means of making the appearance more pleasant by applying texture to the interface. Google's Titan One font in then used as a means of making the text more readable and thick in larger sizes. The color pattern is taken from the default color pallete used by Twitter, which was an allusion to using Bootstrap to make the interface. 

The spinning of the icons in the Header and Footer is taken from the default created when using `create-react-app` and is a modified version of that animation.  The use of text shadow on the light text against a dark backdrop is a discovery I have made for purposes of making this text more easily read and tying the color palette together.

Ultimately I was trying to showcase my flare for interface design without going overboard, which I hope is the impression that it gives off but I have a tendency to overdo it and thus appreciate any feedback on the matter. 

## Gallery 


![WholePage](/public/images/wholepage.png)
> The Whole Page 

![Page](/public/images/page.png)
> Another shot of the page

![Play Button](/public/images/play_button.png)
> The Play Button

![Message](/public/images/message.png)
> The displayed message

![Red Text](/public/images/redtext.png)
> The text have turned red

![Flash](/public/images/flash.png)
> The text flashing having reached the last ten seconds. 

 

