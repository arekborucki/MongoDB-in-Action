// Displays the replica set status, listing each member’s ID, hostname, and current state.
db.adminCommand("replSetGetStatus").members.map((m) => ({
  _id: m._id,
  name: m.name,
  state: m.state,
  stateStr: m.stateStr
}))
