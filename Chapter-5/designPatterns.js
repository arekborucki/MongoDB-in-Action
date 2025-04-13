// Subset Pattern
// Store a subset of data (e.g., only the most relevant airport information) to reduce document size
{
  "_id": ObjectId("56e9b39b732b6122f877fa35"),
  "flight_id": "FL123",
  "airline": {
    "id": 410,
    "name": "Delta Airlines",
    "alias": "2B",
    "iata": "ARD"
  },
  "src_airport": {
    "code": "JFK",
    "name": "JFK International Airport"
  },
  "dst_airport": {
    "code": "LAX",
    "name": "Los Angeles International Airport"
  },
  "airplane": "CR2",
  "stops": 0
}

// Computed Pattern
// Precompute values like total flights for each airport to reduce CPU usage at read time
{
  "_id": "JFK",
  "name": "JFK International Airport",
  "location": {
    "city": "New York",
    "country": "USA"
  },
  "facilities": ["Wi-Fi", "Lounge", "VIP Services"],
  "total_flights": 3500
}

// Approximation Pattern
// Use estimated values (e.g., approximating page views) to reduce write operations
{
  "page_id": "12345",
  "estimated_views": 1500,
  "sampling_rate": 0.05,
  "last_updated": "2024-04-20T12:00:00Z"
}

// Archive Pattern
// Move older data to an archive for better performance and smaller active collections
{
  "log_id": "abc123",
  "user_id": "98765",
  "activity": "login",
  "timestamp": ISODate("2024-05-12T10:00:00Z"),
  "status": "active"
}

// Attribute Pattern
// Store rare attributes in key-value pairs to avoid bloated documents
{
  "product_id": "98765",
  "common_attributes": {
    "name": "Laptop",
    "price": 1200,
    "in_stock": true
  },
  "rare_attributes": [
    { "key": "special_offer", "value": "10% off" },
    { "key": "warranty_years", "value": 3 },
    { "key": "processor_generation", "value": "13th Gen" },
    { "key": "custom_rgb_lighting", "value": true },
    { "key": "touchscreen_support", "value": false },
    { "key": "military_grade_certification", "value": "MIL-STD-810G" }
  ]
}

// Bucket Pattern
// Group related data (like sensor readings) into buckets to reduce document size
{
  "sensor_id": "abc123",
  "date": "2024-04-20",
  "readings": [
    { "time": "08:00", "value": 22.5 },
    { "time": "08:05", "value": 22.7 },
    { "time": "08:10", "value": 22.9 }
  ]
}

// Document Versioning Pattern
// Store document versions for auditing or rollback purposes
{
  "document_id": "456",
  "version": 3,
  "content": "Latest content here.",
  "previous_versions": [
    {
      "version": 2,
      "content": "Older content here.",
      "date_modified": "2023-12-01"
    },
    {
      "version": 1,
      "content": "Original content here.",
      "date_modified": "2023-11-01"
    }
  ]
}

// Extended Reference Pattern
// Embed key data from referenced documents to reduce JOINs
{
  "post_id": "789",
  "content": "Check out these new features!",
  "user": {
    "user_id": "555",
    "name": "Alex",
    "email": "alex@example.com",
    "role": "admin"
  },
  "timestamp": "2024-04-20T15:00:00Z"
}

// Outlier Pattern
// Separate documents with unusual data (e.g., large arrays) to maintain query performance
{
  "sensor_id": "xyz987",
  "readings": [
    { "time": "09:00", "value": 19.5 },
    { "time": "09:05", "value": 19.7 }
  ],
  "date": "2024-04-20",
  "has_extra_readings": true
}

{
  "sensor_id": "xyz987",
  "date": "2024-04-20",
  "extra_readings": [
    { "time": "09:10", "value": 20.1 }
  ]
}

// Pre-allocation Pattern
// Pre-define document structure for later data insertion, useful for a planned academic year
{
  "student_id": "12345",
  "name": "John Doe",
  "academic_year": "2024",
  "monthly_records": {
    "January": { "attendance": [], "grades": [] },
    "February": { "attendance": [], "grades": [] }
  }
}

// Polymorphic Pattern
// Store different types of athletes (e.g., tennis and soccer) in the same collection
{
  "athlete_id": "78910",
  "type": "tennis_player",
  "name": "Alice Smith",
  "age": 25,
  "tennis_specific": {
    "ranking": 15,
    "hand": "right"
  }
}

{
  "athlete_id": "78911",
  "type": "soccer_player",
  "name": "Bob Johnson",
  "age": 22,
  "soccer_specific": {
    "position": "forward",
    "goals_scored": 30
  }
}

// Schema Versioning Pattern
// Track schema versions with a `schema_version` field for easier migration
{
  "document_id": "456789",
  "schema_version": 2,
  "name": "Product XYZ",
  "price": 199.99,
  "new_feature": "Improved battery life"
}

{
  "document_id": "789012",
  "schema_version": 3,
  "product_details": {
    "name": "Product XYZ Pro",
    "price": 249.99,
    "features": ["Improved battery life", "Wireless charging", "OLED display"]
  },
  "warranty_period_years": 2,
  "release_date": "2024-05-01"
}

// Subset Pattern
// Store only frequently accessed data, like recent posts, directly in the main document
{
  "user_id": "112233",
  "name": "Emily White",
  "recent_posts": [
    { "post_id": "p100", "content": "Exciting news today!", "date": "2024-04-18" },
    { "post_id": "p101", "content": "Loved the weather!", "date": "2024-04-17" }
  ],
  "older_posts_link": "posts_archive/112233"
}

// Tree Pattern
// Use a tree structure to represent hierarchical data, like employee reporting structures
{
  "employee_id": "2001",
  "name": "Alice Johnson",
  "position": "Regional Manager",
  "reports_to": [
    { "employee_id": "1001", "name": "Sarah Gold" }
  ],
  "direct_reports": [
    { "employee_id": "2002", "name": "Bob Smith" },
    { "employee_id": "2003", "name": "Linda White" }
  ]
}
