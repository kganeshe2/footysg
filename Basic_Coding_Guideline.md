# FootySG Basic Coding Guidelines
Rapid and efficient development guidelines for small group of contributors

## Naming Conventions

Frontend
- Template: camelCase
```html
<template name="navBar"></template>
```
- Class: small-letters-and-dash-seperator
```html
<div class="nav-bar-title"></div>
```
- Filename: small-letters-and-dash-seperator
```file
nav-bar.html
```


Server
- MongoDB Collctions (Object): Capital first letter, single noun preferable 
```javascript
import { Pitches } from '../pitches.js';
```


Database
- Collections: small letters, single noun preferable
```
db.pitch.findOne()
```

- Attributes (??) in a document: camelCase
```json
{"_id":"1234567890asdfghjkl", "name":"footySG", "message":"Hello World!"}
```


## Version Control
Branching
  1.  Checkout the latest from master. This is individual master.
  2.  Create new branch from individual master.
  3.  Pull request to individual master only. Please make sure individual master is a working version.
  4.  Pull request from individual master to master only.
