// Perform multiple insert operations across different collections (MongoDB 8.0+)
db.adminCommand({
  bulkWrite: 1,
  ops: [
    // Insert into sample_training.routes
    {
      insert: 0,
      document: {
        airline: { id: 413, name: 'American Airlines', alias: 'AA', iata: 'AAL' },
        src_airport: 'DFW',
        dst_airport: 'LAX',
        codeshare: '',
        stops: 0,
        airplane: '737'
      }
    },
    // Insert into sample_analytics.customers
    {
      insert: 1,
      document: {
        accounts: [371138, 324287],
        tier_and_details: {
          '0df078f33aa74a2e9696e0520c1a828a': {
            tier: 'Bronze',
            id: '0df078f33aa74a2e9696e0520c1a828a',
            active: true,
            benefits: ['sports tickets']
          },
          '699456451cc24f028d2aa99d7534c219': {
            tier: 'Bronze',
            id: '699456451cc24f028d2aa99d7534c219',
            active: true,
            benefits: ['24 hour dedicated line']
          }
        }
      }
    }
  ],
  nsInfo: [
    { ns: "sample_training.routes" },
    { ns: "sample_analytics.customers" }
  ]
})
