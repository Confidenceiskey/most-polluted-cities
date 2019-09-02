### [Most Polluted Cities](https://confidenceiskey.github.io/most-polluted-cities/)

_A web app that finds the 10 most polluted cities based on a selected country_

#### Project Guidelines

The aim for this project was to build a web app that used an API to return the 10 most polluted cities in a select few countries. In addition, a description was made available to learn more about each city. The full design and UI was up to me to create.  
To complete the project, the below **user stories** needed to be fulfilled:
- I'm able to select a country from an available list
- I'm able to type in a country with an auto suggestion feature
- The only countries that can be queried are: Poland, Germany, France and Spain
- I'm able to see a list of the 10 most polluted cities within a selected country 
- I can click on a city to read a short description about it
- The search field needs to always be seen

#### Project Approach

I decided to build this project by first doing some rough pencil designs to get an idea of the overall layout. I choose to use React for this project and started by building out the various UI components. This also involved making sure the project was fully responsive and looked good on all screen sizes.

Once this was completed, I started coding and decided to first get the air quality data from the OpenAQ API. I worked with the data, as well as did some research on air quality calculations. I decided to settle on the Air Health Quality Index calculation that is used in Canada. I slightly modified the formula to include all measurements for a city (as opposed to each measurement point) and took the average over the three hours irregardless of the minimum or maximum amount of data points. 

After this, I implemented this into the UI and then got to work on obtaining the city descriptions from the WIKI API. 

The last little bit was doing finishing touches on the project, as well as error checking.

#### Made with
- HTML, CSS, JavaScript & React 


#### Icons by

<strong>Industrial pollution:</strong> 

<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

<strong>City landscape:</strong>

<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

<strong>Cow:</strong>

<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

<strong>Masked Man:</strong>

<div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

<strong>Person with Mask (face only):</strong>

<div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>


#### Disclaimer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).