# React Workshop - Spotify App

We will create a music app to search for artists and we add some of them in a favorite list.

## Specs

* Create a menu with two choices, Search and Favorite.
* When user clicks on Search will go in home page ('/')
* When user click on Favorite will go in favorite page ('/favorite')

### Search page
* We should display an input field in which user will type the artist name
* We should display a button and when the user clicks on button will fetch the artists from `http://localhost:3000/artists?q={artist_name}`
* When we have artists we should display them in a list below input field
* Each artist card will display name, genre, year and a heart.
* When the user clicks on heart and the artist is not already on favorites will add the artist into favorite list and make the heart red
* When the user clicks on heart and the artist is already on list will remove artist from list and will make the heart black
* When the user adds or removes artists from favorite the amount of artists in favorite list will be displayed into Favorite menu item if it is greater than zero

### Favorite page
* We should display the list of favorite artists
* Each artist card will display name, genre, year and a heart
* When the user clicks on heart will remove the artist from favorite list
* If the favorite list is empty then we should display `Add your favorite artist from the search results! ♥`


## Bonus**

* Create another choice in the navbar menu, Youtube.
* When user clicks on Youtube will go in home page ('/youtube-app')

### Youtube page
* We should display an input field in which user will type the video name he want to seach in Youtube.
* When we have videos we should display them in a list below input field.
* Between input and videoList there should be shown the first video of the videoList.
* We should display a video description with title and video and description below the video.
* Each videoListItem card will thumbnail of the video and a title.


## If you want to run the app download the repository

$ git clone https://github.com/chrissiatras/React-Spotify-App.git

$ cd spotify-app

$ npm install

$ npm run server (to turn on the db.json)

$ npm run start (in other terminal window, different from the server)








