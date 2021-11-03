# XCentiumTest - Mini Netflix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Features
- Show mock 5 movies data (Acted as if fetching from the backend)
- Navigation to movie detail


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
If the app is being hosted on localhost, CORS error will be raised when requesting the server. Belows are ways to hot resolve them for test purpose.

1. Disabling CORS check on the broswer.
- Create a shortcut of Chrome
- Navigate `Properties/Shortcut/Target` and replace with `"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=C:\ChromeTempFiles`.
- Close and Open Chrome.

2. Using 3rd party library
- https://www.npmjs.com/package/cors-anywhere#client

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests

This project doesn't contain any unit testing.

## Requirements
1.	Build a minimal two-page SPA using Angular.
2.	The first page will contain a list of movie poster thumbnails.
3.	When a poster thumbnail is clicked, it will redirect to a “movie details” page.
4.	On the movie details page, the user should see a poster, title, description, and rating for the movie.
5.	When this page is first loaded, fetch the movie data from an external API.
6.	After the movie data is fetched, display it on the page, and add it to your Angular store.
7.	Subsequent visits to the page should load data from the store - instead of making another API request.
8.	You should be able to load different movies by updating the URL. For example, typing http://localhost:8080/movie/123 in your browser bar should load the movie details for the movie with ID #123.
9.	Please include at least 5 different movies.
10.	ES6+ JavaScript
11.	SASS
12.	No CSS framework should be used (no bootstrap, etc., show us your SCSS skills)
13.	Semantic HTML
14.	Responsive
15.	WCAG Accessible (as much as possible, don’t spend too much time)
16.	Google Chrome support (no need to test other browsers for this exercise)
17.	Build Process (Gulp, Grunt, Webpack, etc) 
