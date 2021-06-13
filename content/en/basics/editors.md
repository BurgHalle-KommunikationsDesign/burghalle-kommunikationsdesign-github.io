---
title: Editors
description: ''
position: 2.01
category: Basics
version: 1.0
---

## Description

To write your code you want to install a proper text editor.

## Tools

- Atom (Recommended) https://atom.io/
- Visual Studio https://code.visualstudio.com/

## How to

### Folder Structures

You always work inside a folder structure you have on your computer. You are the person who decides how this structure looks and where it is located on your machine, so be smart.

Personally I have a folder called *Development* inside my *User folder*, like others have a *Documents* or *Downloads* folder. For each project I make a new sub-folder: I create this folder with *right-click* -> *New Folder*

- User
    - Development
        - Project A
        - Project B
    - Documents
    - ...

### Working in Atom

Open Atom and click *Add folders*, select a working folder which you created earlier with the Finder (Mac) / Explorer (Win).

![New Project](/editors/01.jpg)

An open folder is called **Project** in Atom.
On the left sidebar you have an overview of all folders and files within this project.
*Right-click* to make a *New File*.

![New Project](/editors/02.jpg)

Open your Finder / Explorer simultaniously you will see that the project in Atom **is equal** to your file system on your computer. Working with files and folders within Atom is only another way of manipulating data.
You can also add a folder with your Finder and it will show up in Atom.

![New Project](/editors/03.jpg)

### File extensions

Making a new file gives you the possibility to choose which **type** the file has. The type of the file is terminated through the **extension**. This lets the reader, also called **parser**, of the file know which rules it must obey to understand the file.

Common file extensions are:

**Text**
- .txt (Text)
- .rtf (Rich Text Format, used by Apples Text Editor)
- .md (Markdown)

**Web**
- .html (HyperText Markup Language, parsed by Browsers as Websites)
- .css (Cascading Style Sheet, used to give a Styling to .html)
- .js (Javascript, used to give interactiveness to .html)
- .php (Hypertext Preprocessor, server-side language)
- .py (Python, universal language)

**Design**
- .jpg (Joint Photographic Experts Group, image)
- .png (Portable Networks Graphics, image)
- .svg (Scaleable Vector Graphics, vector)

**Apps**
- .psd (Photoshop)
- .ai (Illustrator)

...

Its worth to notice that file types are common sense. There is no force in the known universe that prevents you from making your own file extension and building a parser for this.

![New Project](/editors/04.jpg)
