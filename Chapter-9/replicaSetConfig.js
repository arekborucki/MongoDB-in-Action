// Retrieves configuration details for each replica set member, including priority, voting rights, and delay settings.
db.adminCommand("replSetGetConfig").config.members.map((m) => ({
  host: m.host,
  arbiterOnly: m.arbiterOnly,
  hidden: m.hidden,
  priority: m.priority,
  secondaryDelaySecs: m.secondaryDelaySecs,
  votes: m.votes
}))
