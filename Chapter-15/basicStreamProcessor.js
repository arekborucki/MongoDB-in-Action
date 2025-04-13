// A minimal stream processor that reads from a sample stream source

let source = {
  $source: {
    connectionName: "sample_stream_solar"
  }
};

let processor = [source];

sp.process(processor)
