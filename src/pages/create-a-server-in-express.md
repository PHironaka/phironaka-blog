---
title: Create a server in Express
date: 2017-04-13 17:50:00 Z
tags:
- shopify
---

This is my first blog post I've ever written in my life. Ok, that's a lie. I've made prior attempts at maintaining one, but all have been abandoned after a few short posts. This time is different, as my sole motive is to improve as a developer.

I'm currently in my 7th week at General Assembly's Web Developer Immersive course. So far as a class, we've completed two projects: an interactive Javascript Game as well as a Ruby on Rails app. This will be the first and last time that I mention GA, as I'd prefer to direct the focus of my writing on my personal development. For this triumphant first post, I've decided to detail the steps required to create a server in Express (we just did this 30mins ago in class).

### Step 1:
You need to make sure to install Node.js on your machine. Hop on over [here](https://nodejs.org/en/)

### Step 2:
Create a local directory on your machine via the command line. `mkdir your-app`. From there, you can cd (change directory) into that new folder you created.

### Step 3:
Run `npm init` to initialize the project's package.json

### Step 4:
Since the JSON file is looking for a file called `index.js`, we will need to create that file. Since you already have the Terminal open, you can create it by typing `touch index.js` from the same directory.

### Step 5:
Next step is creating a server with Express. Run `npm install express --save` from the command line. Once that's successfully run, open up the index.js file and add the following lines of code:

const express = require('express')  
const app = express()   
const PORT = 8000

First off, it's important to take note of the `const`. We're using that as a global variable so it cannot be changed later on, it will always remain at this set value. I've essentially called Express, which is installed within the Node Modules, to run. The port is just a variable we'll use when we create the local server.

### Step 6:

Next thing we'll do is create the localhost listen event. Copy the following code:

app.listen(PORT, function () {  
  console.log('listening on port 8000!')  
})  

This just confirms the express server will be listening in on requests at localhost:8000.

### Step 7:

As an initial test, we can create a GET request for the root folder.

<code>
app.get('/', function(req, res) {  
  res.send('<h3>Boom!</h3>')  
})



In other words: on the homepage, send the following response argument in the form of the h3 copy to be displayed.

Run `nodemon index.js`, refresh Localhost:8000 and you should get that Boom! text to appear. And there you have it, a basic Express set up with Node.js.
