// Enhance mongosh prompt with server stats
prompt = function() {
  const version = db.version();
  const collectionsCount = db.getCollectionNames().length;
  return "Uptime:" + db.serverStatus().uptime +
         " | Documents:" + db.stats().objects +
         " | Version:" + version +
         " | Collections:" + collectionsCount +
         " > ";
};

// Auto-switch to a preferred database on start
const targetDatabase = "sample_training";
function switchToDatabase() {
  const currentDatabase = db.getName();
  if (currentDatabase !== targetDatabase) {
    print(`Switching to database: ${targetDatabase}`);
    db = db.getSiblingDB(targetDatabase);
  }
}
switchToDatabase()
