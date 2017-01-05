1. Fork and clone this repo
1. ```bower init```
1. install your bower dependencies, don't forget to --save
1. create a .gitignore and ignore your bower components
1. include script tags for jQuery, handlebars, and myJavascript.js
1. create a handlebars script tag in index.html, make sure it has an id associated with it
1. within the handlebars script tag, write a basic summary of our random user (name, address, and e-mail). Syling is up to you,
1. all randomUser info needs to be in {{}}, but there's no rule against hard coding info while you're figuring out how you want it to look
  - HINT: use dot notation for accessing items in an array instead of bracket notation ({{results.0.name.title}})
1. follow the directions in the comments in myJavascript.js to fill your html with the appropriate info




##power up
1. Include a picture of our random user
1. create an ajax call to get a random user from the randomUser.me api and use this info to populate the template (can you fill the handlebars template inside a .then() of a Promise?)
