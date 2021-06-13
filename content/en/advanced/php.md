---
title: PHP
description: ''
position: 5.4
category: Advanced
version: 1.0
---
## Description

Server side language which is used to pre-process files like HTML, CSS, JS.
[Kirby](/content-management/kirby) and [Wordpress](/content-management/wordpress) are written in PHP.

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
Outputs
```
<html>
  <head>
    <title>PHP-Test</title>
  </head>
  <body>
     <p>Hallo Welt</p>
  </body>
</html>
```

## Learn More
- Basics: https://www.w3schools.com/php/default.asp
