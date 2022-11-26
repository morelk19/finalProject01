# Chess

In this project, I'll be recreating the classic game of chess. It will be a two player game. 

**
**.

A great first step in tackling this project would be to read through the documentation starting at the "Design" section.

## Requirements

* A Checkered Board of 64 squares.

* White and Black Pieces that populate the board.

* Pieces move along the board.

* Pieces are able to take other pieces.

* Pieces only move their appropriate routes.

* Pieces are only able to take the correct pieces.

* Checkmate wins the game.

## Steps

#### 1. Designing your layout

I started with the easiest thing I could think of. Creating the board. There is a variety of routes I could take in creating a checkered board. After attempting various methods I decided with going with creating div elements that make use of the container class that make use of the grid layout. I originally attempted a table but I found that it didn't display the images of the pieces. Switching to divs with the classes of col and row worked much better. I did have to adjust the width and height of each col div to display properly. 


#### 2. Setting Up the Board

Actually while I was creating the board I was looking for pieces. I added logic to add the appropriate images to the col div's so that the pieces would display. I added the logic that while the board was being created the pieces would be added as well. This would ensure that I was able to add the row and column number to the image classlist. 

#### 6. Adding each story to the DOM

Finally, after retrieving each story's details, add the details to the DOM. You should
have a template on how to do this from Part 2. All you have to do now is figure out how
to do that for each story.

The previous TODO statement would look more like this now:

```javascript

// TODO:
// * For each ID...
//   * Make an API request to get the story's details
//   * Upon receiving the response, add the details to the DOM

```

After doing this, you should have a working Hacker News clone!

## Stretch Goals
