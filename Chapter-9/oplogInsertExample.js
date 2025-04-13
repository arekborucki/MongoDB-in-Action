// Finds a single insert operation in the oplog (op: 'i') to view insert log structure in replication.
db.getSiblingDB("local").oplog.rs.findOne({ op: 'i' })
