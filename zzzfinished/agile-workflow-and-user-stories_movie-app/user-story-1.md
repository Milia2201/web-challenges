# Title

## Value Proposition

**As a** `user` <br>
**I want to** `see a list of the current movies` <br>
**so that** `i can decide what to watch` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- [ ] header with the title of the app is displayed at the top of the page - "Movie App"
- [ ] a vertical scrollable list of movies, but which shows two movies next to each other (horizontaly)
- [ ] each movie: image is displayed
- [ ] each movie: title is visible under the image
- [ ] each movie: score is visible in the upper right corner of each move image
- [ ] if there is an error displaying the movies the following message should be displayed: "Sorry we couldn't retrieve the latest movie data at the moment. Please try again later.", instead of the movies

## Tasks

- [ ] Create Header Component
    - [ ] Design and implement a header component.
    - [ ] Ensure the title "Movie App" is displayed at the top of the page.
- [ ] Implement Movie List Layout
    - [ ] Create a vertical scrollable list component for movies.
    - [ ] Ensure the layout displays two movies side by side horizontally.
- [ ] Movie Item Component
    - [ ] Design and implement a movie item component.
    - [ ] Ensure each movie item displays an image.
    - [ ] Display Movie Title
        - [ ] Add functionality to display the movie title under the image in the movie item component.
    - [ ] Display Movie Score
        - [ ] Implement a feature to show the movie score in the upper right corner of each movie image.
- [ ] Fetch Movie Data from Database
    - [ ] Implement a function to fetch movie data from the database.
    - [ ] Ensure the function handles asynchronous operations properly.
- [ ] Error Handling for Movie Data Retrieval
    - [ ] Implement error handling for the movie data retrieval process.
    - [ ] Display the error message: "Sorry we couldn't retrieve the latest movie data at the moment. Please try again later." when there is an error.
- [ ] Testing
    - [ ] Write unit tests for each component to ensure they render correctly.
    - [ ] Test the data fetching function to ensure it retrieves data as expected.
    - [ ] Test the error handling to ensure the error message displays appropriately.
