---
title: CSS
description: ''
position: 2.2
category: Basics
version: 1.0
---
## Description

A.k.a **Cascading Style Sheet**<br>
CSS is the styling language of websites.
Styling includes properties like

- display
- position
- color
- transformation
- font-size
- ...

The properties can be applied to [HTML](/basics/html) tags.

## Example
```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <style>
      .i-am-red {
        color: red;
      }

      .i-am-rotated {
        transform: rotate(90deg);
      }

      .i-am-not-visible {
        display: none;
      }
    </style>
  </head>
  <body>

    <h1 class="i-am-red">This is a Heading</h1>
    <p class="i-am-rotated">This is a paragraph.</p>
    <div class="i-am-not-visible">
      This is a box
      <div>Inside another box</div>
    </div>

  </body>
</html>
```


## Learn more
- Basics: https://www.w3schools.com/css/css_intro.asp
- Basics (de): https://www.mediaevent.de/css/

## PS
You can also style [SVGs](/making/an-interactive-svg) with CSS!
