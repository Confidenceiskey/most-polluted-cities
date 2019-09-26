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

Once this was completed, I started coding and decided to first get the air quality data from the OpenAQ API. Once I knew the data that I was going to get, I did some research on air quality calculations in order to determine a pollution ranking. I decided to settle on the Air Health Quality Index calculation that is used in Canada. I slightly modified the formula to include all measurements for a city (as opposed to each measurement point) and took the average over the last 3 hours, irregardless of the minimum or maximum amount of data points. If no data measurements were taken for a particular country over the past 3 hours, no pollution ranking would be determined.

After completing the OpenAQ API call and manipulating the data, I implemented this into the UI. Then I got to work on obtaining the city descriptions from the WIKI API and displaying this information in the app. 

The last little bit was doing finishing touches on the project and error checking.

#### Made with
- HTML, CSS, JavaScript & React 
- OpenAQ API
- WIKI API
- Pollution index calculation based off of the [Air Health Quality](https://en.wikipedia.org/wiki/Air_Quality_Health_Index_(Canada)) Index used in Canada.


#### Icons by [Flaticon](https://www.flaticon.com)

- **Industrial pollution:** Made by [monkik](https://www.flaticon.com/authors/monkik)

- **City landscape:** Made by [smalllikeart](https://www.flaticon.com/authors/smalllikeart)

- **Cow:** Made by [Flat Icons](https://www.flaticon.com/authors/flat-icons)

- **Masked Man:** Made by [surang](https://www.flaticon.com/authors/surang)

- **Person with Mask (face only):** Made by [ultimatearm](https://www.flaticon.com/authors/ultimatearm)


#### Preview

Check out the [live version](https://confidenceiskey.github.io/most-polluted-cities/)

![Screenshot of my most polluted cities project built in React](https://confidenceiskey.github.io/codepenimg/most-polluted.jpeg "Screenshot of my most polluted cities React App")

##


#### Disclaimer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).