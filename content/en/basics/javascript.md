---
title: Javascript
description: ''
position: 2.3
category: Basics
version: 1.0
---
## Description

Javascript is the programming language of websites.
It enables you to

- make HTML elements interactive
- alter HTML elements or their styling
- load content from servers
- ...

## Example

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <button id="click-me">This is a button</button>

    <script>
      var button = document.getElementById('click-me')
      button.addEventListener('click', function () {
        button.innerHTML = 'You clicked me!'
      })
    </script>
  </body>
</html>
```

## Learn more
- Basics: https://www.w3schools.com/html/default.asp
- Basics (de): https://www.mediaevent.de/javascript/
