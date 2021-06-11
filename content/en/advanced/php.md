---
title: PHP
description: ''
position: 5.4
category: Advanced
version: 0.9
---
## Description

Server side language used to pre-process files like HTML, CSS, JS.

## Examples

### General
```
<?php
$x = 5;
$y = "John";
echo $x;
echo $y;
?>
```
Outputs
```
5
John
```
### Web

```
<html>
  <head>
    <title>PHP-Test</title>
  </head>
  <body>
    <?php echo "<p>Hallo Welt</p>"; ?>
  </body>
</html>
```
Outpputs
```
<html>
  <head>
    <title>PHP-Test</title>
  </head>
  <body>
     <p>Hallo Welt</p>
  </body>
</html>
``
