# Title

## Value Proposition

**As a** `user` <br>
**I want to** `see the details page when I click on an image` <br>
**so that** `I can see additional information about the movie` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

- [ ] when the image from a movie is clicked a new page opens with more details about the clicked movie
- [ ] in the detail page:
    - [ ] on the upper left corner there is a back button
    - [ ] header is displayed at the same place
    - [ ] the movie title is displayed as a header on the left side
    - [ ] underneath the title is the release date (yyyy-mm-dd)
    - [ ] on the rigth next to the title is the movie image
    - [ ] underneath the title and image is a description of the movie 

## Tasks

- [ ] Implement Clickable Movie Image
    - [ ] Modify the movie item component to make the movie image clickable.
    - [ ] Implement navigation to the detail page using Next.js routing when the image is clicked.
- [ ] Create Movie Detail Page Component
    - [ ] Design and implement a new component for the movie detail page in the pages directory.
- [ ] Add Back Button
    - [ ] Implement a back button in the upper left corner of the detail page.
    - [ ] Ensure the back button navigates to the previous page using Next.js routing.
- [ ] Display Header on Detail Page
    - [ ] Ensure the header is displayed in the same position as on the main page.
- [ ] Display Movie Title
    - [ ] Display the movie title as a header on the left side of the detail page. <h2>
- [ ] Display Release Date
    - [ ] Implement a feature to display the release date (formatted as yyyy-mm-dd) underneath the movie title.
- [ ] Display Movie Image
    - [ ] Display the movie image on the right side next to the title and release date.
- [ ] Display Movie Description
    - [ ] Implement a section underneath the title and image to display the movie description.
- [ ] Implement Pagination for Movie List
    - [ ] Create a pagination component to navigate through the list of movies.
    - [ ] Ensure the pagination updates the displayed movies based on the current page.
- [ ] Fetch Movie Data with Pagination
    - [ ] Modify the data fetching function to support pagination, retrieving only the movies for the current page.
- [ ] Testing
    - [ ] Write unit tests for the movie detail page component to ensure all elements render correctly.
    - [ ] Test the navigation from the main page to the detail page and back.
    - [ ] Test the pagination functionality to ensure it works as expected.
