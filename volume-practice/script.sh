#!/bin/bash
set -e

echo "=== Container started ==="
echo "Hostname: $(hostname)"
echo "Writing message to /data...."

mkdir -p /data
chmod 777 /data

echo "Hello from container $(hostname) at $(date)" > /data/message.txt

echo "File written successfully"
echo "Content of /data:"
ls -l /data
cat /data/message.txt
echo "========================="

sleep infinity
