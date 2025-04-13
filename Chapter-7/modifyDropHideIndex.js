// Shows how to drop, hide, unhide, or convert indexes using collMod.
db.movies.hideIndex({ runtime: 1 })
db.movies.unhideIndex({ runtime: 1 })
db.runCommand({
  collMod: "transactions",
  index: {
    keyPattern: { date: 1 },
    expireAfterSeconds: 0
  }
})
db.movies.dropIndex("runtime_1")
