# MongoDB Direct Access Functions

**Current Version:** `0.1.0 (2014/03/25)`

Extends `Meteor.Collection` on the server with direct access calls to the MongoDB driver.

- `directFind(selector, options)`
- `directFindOne(selector, options)`
- `directUpdate(selector, modifier, options)`
- `directInsert(doc)`
- `directRemove(selector)`
- `directExists(selector)`

Works on the serverside and eliminates overhead and latency compensation when communicating with the database.

Inserts generate and ID based on the Meteor ID function of random characters. Most functions should work the same as their regular counterparts save for any reactivity.

***Note:** This package is a work in progress but greatly speeds up database processing if large data is to be manipulated on the server-side and the OpLog should update the reactivity
component of the clients with the results.*

--------------------------------------------------------------------------------

## Installation

To install the package simply type `mrt add mongo-direct` in the project directory.

--------------------------------------------------------------------------------

## Example

```
Test = new Meteor.Collection('test');

if (Meteor.isServer) {
  Meteor.startup(function() {
    
    Test.directInsert({test: "123"});
    Test.directInsert({test: "123"});
    Test.directInsert({test: "123"});
    
    console.log("Exists: "+ Test.directExists({test: "123"}));
    console.log("Count: " + Test.directFind({test:"123"}).length);
  
    console.log("Remove: "+ Test.directRemove({test: "123"}));
    
    console.log("Count: " + Test.directFind({test:"123"}).length);
    
  });
}
```

--------------------------------------------------------------------------------

## Contributors

- Aaron Thorp ([http://www.aaronthorp.com](http://www.aaronthorp.com))

[![Support us via Gittip][gittip-badge]][aaronthorp]

[gittip-badge]: https://raw.github.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[aaronthorp]: https://www.gittip.com/aaronthorp/

