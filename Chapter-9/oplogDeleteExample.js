// Finds a single delete operation in the oplog (op: 'd') to inspect how MongoDB logs delete events.
db.getSiblingDB("local").oplog.rs.findOne({ op: 'd' })
