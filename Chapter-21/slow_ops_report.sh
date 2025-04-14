#!/bin/bash

# ==========================================
# Script: slow_ops_report.sh
# Description:
#   Detects long-running operations using db.currentOp().
#   Filters operations exceeding a time threshold (default: 60s).
# ==========================================

# Threshold in seconds (you can override with argument)
THRESHOLD=${1:-60}

echo "⏱️ Searching for operations running longer than $THRESHOLD seconds..."

mongosh --quiet --eval "
  const ops = db.currentOp({ 'secs_running': { \$gt: $THRESHOLD } });
  if (ops.inprog.length === 0) {
    print('✅ No long-running operations found.');
  } else {
    print('⚠️ Long-running operations:');
    ops.inprog.forEach(op => {
      printjson({
        opid: op.opid,
        secs_running: op.secs_running,
        ns: op.ns,
        client: op.client,
        desc: op.desc,
        command: op.command,
        waitingForLock: op.waitingForLock
      });
    });
  }
"
