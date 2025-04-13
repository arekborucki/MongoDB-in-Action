// Watches for real-time changes in all collections of the sample_mflix DB using change streams in mongosh.
const watchCursor = db.getSiblingDB("sample_mflix").watch();

while (!watchCursor.isClosed()) {
  let next = watchCursor.tryNext();
  while (next !== null) {
    printjson(next);
    next = watchCursor.tryNext();
  }
}
