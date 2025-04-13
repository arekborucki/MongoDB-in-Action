// Switch to the sample_training database
use sample_training

// Insert a single document into the routes collection
db.routes.insertOne({
  airline: { id: 410, name: 'Lufthansa', alias: 'LH', iata: 'DLH' },
  src_airport: 'MUC',
  dst_airport: 'JFK',
  codeshare: '',
  stops: 0,
  airplane: 'A380'
})

// Insert multiple documents into the routes collection
db.routes.insertMany([
  {
    airline: { id: 413, name: 'American Airlines', alias: 'AA', iata: 'AAL' },
    src_airport: 'DFW',
    dst_airport: 'LAX',
    codeshare: '',
    stops: 0,
    airplane: '737'
  },
  {
    airline: { id: 411, name: 'British Airways', alias: 'BA', iata: 'BAW' },
    src_airport: 'LHR',
    dst_airport: 'SFO',
    codeshare: 'Y',
    stops: 0,
    airplane: '747'
  },
  {
    airline: { id: 412, name: 'Air France', alias: 'AF', iata: 'AFR' },
    src_airport: 'CDG',
    dst_airport: 'JFK',
    codeshare: '',
    stops: 0,
    airplane: '777'
  }
])
