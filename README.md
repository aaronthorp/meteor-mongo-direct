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

Inserts generate an ID based on the `Meteor.Collection.ObjectID()` function. Most functions should work the same as their regular counterparts save for any reactivity.

**Note:** *This package is a work in progress but greatly speeds up database processing if large data is to be manipulated on the server-side and the OpLog should update the reactivity
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
    
    console.log("Add: " + Test.directInsert({test: "123"}));
    console.log("Add: " + Test.directInsert({test: "123"}));
    console.log("Add: " + Test.directInsert({test: "123"}));
    
    console.log("Update: " + Test.directUpdate({test: "123"}, {$set: {foo: "bar"}}))
    
    console.log("FindOne:");
    console.log(Test.directFindOne({foo: "bar"}));
    
    console.log("Exists: "+ Test.directExists({test: "123"}));

    console.log("Find:"); 
    console.log(Test.directFind({test:"123"}));
   
    console.log("Remove: "+ Test.directRemove({test: "123"}));
    
    console.log("Count: " + Test.directFind({test:"123"}).length);
    
  });
}
```

Should generate results on the server console similar to the following:

```
Add: 4e11ddf0f432ff024b7b2d0a
Add: f61450d79e0c42f2adb6d1e5
Add: d9d1ad1a30e371ec2c150e8b

Update: 1

FindOne:
{ _id: '4e11ddf0f432ff024b7b2d0a', foo: 'bar', test: '123' }

Exists: true

Find:
[ { _id: '4e11ddf0f432ff024b7b2d0a', foo: 'bar', test: '123' },
  { test: '123', _id: 'f61450d79e0c42f2adb6d1e5' },
  { test: '123', _id: 'd9d1ad1a30e371ec2c150e8b' } ]

Remove: 3

Count: 0
```

--------------------------------------------------------------------------------

## Contributors

- Aaron Thorp ([http://www.aaronthorp.com](http://www.aaronthorp.com))

[![Support us via Gittip][gittip-badge]][aaronthorp]

[gittip-badge]: https://raw.github.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[aaronthorp]: https://www.gittip.com/aaronthorp/

