Space Shooter Game
Overview

This project is a browser-based 2D space shooter game developed using HTML, CSS, and JavaScript. The player controls a spaceship using the mouse and shoots bullets to destroy falling enemies. The objective is to survive as long as possible, destroy enemies to gain points, collect health kits to restore health, and achieve a high score. The game features smooth animation, a scoring and health system, and a leaderboard that records top scores using local storage.

Features

The player’s spaceship moves horizontally with mouse movement.

Bullets are fired upward when the player clicks.

Enemies appear randomly from the top and fall downward continuously.

Health decreases when enemies pass or collide with the player.

Health kits appear occasionally and can restore the player’s health when collected.

The score increases for every enemy destroyed.

When the player’s health reaches zero, a Game Over screen is displayed.

The game records the player’s score and name into a local leaderboard.

The leaderboard persists even after closing the browser.

A “Play Again” button allows the player to restart the game easily.

File Description
1. index.html

This is the main entry file of the project. It contains the basic structure of the web page and connects to the stylesheet and JavaScript files. It includes sections for displaying the player spaceship, score counter, health indicator, and the Game Over screen. When this file is opened in a browser, it starts the game by loading all the required components.

2. game.js

This file controls the entire game logic. It handles movement, collision detection, shooting, score tracking, and health management.

It continuously updates the screen through the animate function, which keeps the game running smoothly by moving the player, bullets, enemies, and health kits each frame.

The collision detection system checks when bullets hit enemies or when the player interacts with other elements.

It updates the player’s health and score accordingly.

When health drops to zero, it calls the Game Over function, which stops the animation, displays the Game Over screen, and allows the player to input their name.

The player’s name and score are saved to local storage, where it is later displayed in the leaderboard.

The script also manages object creation and removal, ensuring performance efficiency by cleaning up off-screen elements.

3. leaderboard.html

This file is responsible for displaying the list of high scores. It provides a simple user interface that shows player names alongside their scores. It also includes a button that allows the player to return to the main game.

4. leaderboard.js

This script retrieves and displays saved player data from local storage. It reads all stored player names and scores, sorts them in descending order, and dynamically displays them in a clean format. The data remains available even after refreshing or reopening the browser, allowing persistent score tracking across sessions.

Game Flow

The game begins when the player opens the main page.

The spaceship follows mouse movement, and bullets are fired on clicks.

Enemies spawn continuously and fall toward the bottom.

Destroying enemies increases the score, while missing them reduces health.

Health kits spawn randomly and restore lost health when collected.

When the player’s health becomes zero, the game stops and shows the Game Over screen.

The player enters their name to save the score.

After saving, the player can visit the leaderboard page to view all high scores or start a new game.

Local Storage Functionality

The game uses local storage to save and load the leaderboard data. When the game ends, the player’s name and score are stored in a list format within the browser. On the leaderboard page, the script retrieves that data, sorts it, and displays it. This feature allows the leaderboard to persist without requiring a server or database.

Technologies Used

HTML for structure and layout of the game.

CSS for visuals, styling, and simple animations.

JavaScript for all logic, interactivity, and dynamic behavior.

How to Play

Move your mouse to control the spaceship horizontally.

Click anywhere on the screen to shoot bullets.

Destroy enemies before they reach the bottom to earn points.

Collect health kits to restore your health.

When your health reaches zero, enter your name on the Game Over screen to record your score.

Check your position in the leaderboard and try again to beat your high score.