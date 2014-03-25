# MongoDB Direct Access Functions - v0.1.0

Extends `Meteor.Collection` with direct access calls to the MongoDB driver.

- `directFind(selector, options)`
- `directFindOne(selector, options)`
- `directUpdate(selector, modifier, options)`
- `directInsert(doc)`
- `directRemove(selector)`
- `directExists(selector)`

Works on the serverside and eliminates overhead and latency compensation when communicating with the database.

Inserts generate and ID based on the Meteor ID function of random characters. Most functions should work the same as their regular counterparts save for any reactivity.

This is a work in progress but greatly speeds up database processing if large data is to be manipulated on the server-side and the OpLog should update the reactivity
component of the clients with the results.

--------------------------------------------------------------------------------

## Contributors

- Aaron Thorp ([http://www.aaronthorp.com](http://www.aaronthorp.com))

[![Support us via Gittip][gittip-badge]][aaronthorp]

[gittip-badge]: https://raw.github.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[aaronthorp]: https://www.gittip.com/aaronthorp/

