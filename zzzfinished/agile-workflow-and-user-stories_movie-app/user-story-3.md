# Title

## Value Proposition

**As a** `User` <br>
**I want to** `be able to set movies as favorites` <br>
**so that** `i can see them in my watchlist on a different page` <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- [ ] (Home Page) a footer at the bottom of the page shows the navbar where one can navigate between home and watchlist
- [ ] (details page) underneath the description text is a button "add to watchlist"
    - [ ] clicking the button adds the current movie to the watchlist
- [ ] create a new page -Watchlist- which is reachable through the navbar
- [ ] in the watchlist the movies are displaed in a single file vertically, with the same style as in the home page (but none are displayed horizontally from each other)
- [ ] header is the same
- [ ] an empty watchlist dispalys a text on how to add movies to the watchlist

## Tasks

- [ ] Add Footer to Home Page
    - [ ] Design and implement a footer component at the bottom of the home page.
    - [ ] Include a navbar in the footer for navigation between the home page and the watchlist.

- [ ] create a new collection Watchlist
- [ ] Add "Add to Watchlist" Button on Details Page
    - [ ] Implement Button Functionality
        - [ ] Write a function that adds the movie to the watchlist collection

- [ ] Create Watchlist Page
    - [ ] Create a new page component for the Watchlist in the `pages` directory.
    - [ ] Ensure the Watchlist page is linked in the footer navbar for easy navigation.

- [ ] Display Movies in Watchlist
    - [ ] Implement a layout to display movies in the watchlist in a single vertical list.
    - [ ] Use the same styling as the home page for consistency, ensuring no movies are displayed horizontally.

- [ ] Ensure Consistent Header
    - [ ] Add the same header component to the Watchlist page as is used on the home page.

- [ ] Display Message for Empty Watchlist
    - [ ] Implement a conditional rendering feature to display a message when the watchlist is empty.
    - [ ] The message should instruct users on how to add movies to the watchlist.

