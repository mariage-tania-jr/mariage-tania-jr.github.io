#!/bin/bash
# Simple script to view the wedding website locally with proper CSS and assets

cd "$(dirname "$0")/docs"
echo "Starting local server for the wedding website..."
echo "Open your browser and go to: http://localhost:8000"
echo "Press Ctrl+C to stop the server when done"

# Check if python3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Fall back to python if python3 isn't available
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "Error: Python is not installed. Please install Python to use this script."
    exit 1
fi