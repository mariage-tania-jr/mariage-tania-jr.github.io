#!/bin/bash
# filepath: /home/jrobernai/websiteNextJS/mariage-tania-jr/view_local.sh

echo "Starting a local web server to preview your website..."
echo "Open http://localhost:8000/view_website.html in your browser"
echo "Press Ctrl+C to stop the server when done"

# Start a simple HTTP server
python3 -m http.server 8000