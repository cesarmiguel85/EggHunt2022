# EggHunt2020
A virtual Easter egg hunt around the world using 360 images. Discover new places in a playful way and share your score!

If you want to try it out, go here:
https://cesarmiguel85.github.io/EggHunt2020

## Technologies:
* Ionic 5 / Angular 6
* JQuery 3.5
* Cordova Browser platform
* Photo Sphere Viewer for 360: https://photo-sphere-viewer.js.org/

## Languages:
* English
* French

## How to fork and personalise:
* Fork the repo
* Upload your 360 jpeg images WITH THE EGGS IN THEM, to src/assets/areas/
* Change file src/assets/JSON_DATA.ts with your images, the rectangle coordinates to your eggs, your texts...

You can also connect to a database to upload results and track ranking, just check the data provider, but this github hosted version does use the db link.


**How to easily get the coordinates of an egg?** 

Modify file src/app/imageviewer360/imageviewer360.page.ts, change variable alertclick=true
Double clicking a point in the image will popup the coordinates.
