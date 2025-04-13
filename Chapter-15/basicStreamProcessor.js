// Basic Stream Processor – reads from sample solar stream and prints to shell

// Define the $source stage using the built-in sample solar data
let s = {
  $source: {
    connectionName: "sample_stream_solar"
  }
};

// Build processor pipeline
let processor = [s];

// Execute the processor – will continuously stream to the console
sp.process(processor);

// Use CTRL+C to stop the stream in mongosh shell
