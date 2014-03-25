# Meteor Direct Access Functions

Extends Meteor.Collection with direct access calls to the MongoDB driver.

- `directFind(selector, options)`
- `directFindOne(selector, options)`
- `directUpdate(selector, modifier, options)`
- `directInsert(doc)`
- `directRemove(selector)`
- `directExists(selector)`

Works on the serverside and eliminates overhead and latency compensation when communicating with the database.

--------------------------------------------------------------------------------

## Contributors

- Aaron Thorp ([aaronthorp](https://github.com/aaronthorp))
