---
title: Servers And Clients
description: ''
position: 5.1
category: Advanced
version: 1.0
---
## Description

The internet is a network of servers with each of them have its own address, a domain, so they can be visited by clients.

## Server

The server is responsible for serving a website. As we understand a website as a whole, it is indeed a composition of different files e.g. documents (HTML), styles (CSS), scripts (JS), images (JPG, PNG), fonts (WOFF)... A server does not serve websites, it serves files. The client is the interpretor and puts together the website.

Here we see the landing page of the BURG website consisting of 137 files.

![Requests](/servers-clients/01.jpg)

## Client

A client is a programm that requests files from the server and display them to the user. In general a client program is a web browser. The web browser understands the files and connects them to a proper website.

## Languages

Both parties, servers and clients, use a different set of tools to execute what they are asked for.

Servers use languages like:

- PHP
- Python
- Node
- Ruby

They are also called *preprocessors* because they generate files, *before* they are delivered to the client:

- HTML
- CSS
- Javascript

So we use a PHP script, which will be executed on the server...
```
<?php
  echo "<h1>Hello World</h1>";
?>
```
... and delivered as a file to the client:
```
<h1>Hello World</h1>
```

## Scope

Javascript only executes inside the browser. At this point the server has no idea what is happening.
On the other side PHP only executes inside the server. The client has no access to things it should not see.

For example if you want to save data from a contact-formular you would:

- a) Write a client script that sends the data to the server (servers do not know client side data)
- b) Write a server script that understands this can-you-save-request and ...
- c) writes the data to a file

On the next page visit, if you want to display this data you would:

- d) Write a client script that asks for the data
- e) Write a server script that understands this can-i-get-request and...
- f) reads the files and ...
- g) sends the data to the client in a manner the client understands (clients do not know server side data)

## Request-Response / Client–Server Model

Think about it as a restaurant:

You, the most hungry person on earth, strolls around the streets and searches for a restaurant.
Look, a beautiful Italian place.
The waiter comes, and you immediatly order a basic salad.
The waiter walks way too slow back to the kitchen and passes along your request.
The cook now checks the storage and luckily finds the right ingridients:
A lot of greens, two cucumbers, one tomato.
The cook juggels around, cuts wonderful shapes and thin slices, and tries to prepare a neat dish.
Unfortuneatly the knife is too blunt to cut the tomato.
The cook decides to simply put the whole tomato ontop of the salad.
Notice: Even though you may know all ingridients of the salad, you do not know the final composition of the dish yet.
The bell rings, the waiter comes, and goes, and finally serves you the food.
You look at it, it seems great, but why is there an unprocessed super big ox-heart tomato ontop?

- Hungry person = Client / Browser
- Italian place = Domain
- Cook = Server
- Waiter = HTTP Protocol: Passes requests and responses from client to server
- Kitchen Tools = Server side languages
- Blunt Knife = PHP
- Food Storage = Database
- Ingredients = Data
- Dish = Website
- The Big Tomato = User Experience
