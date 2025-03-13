#!/bin/bash

# Set the directory containing the JPEG files
input_dir="/Users/daniel/Code/web/public/Photography/1"  # Replace with the actual path

# Set the directory where you want to save the WebP files
output_dir="/Users/daniel/Code/web/public/Photography/1"  # Replace with the desired output path

# Ensure the output directory exists.  If it doesn't, create it.
mkdir -p "$output_dir"

# Loop through all JPEG files in the input directory
find "$input_dir" -type f -name "*.JPG" -print0 | while IFS= read -r -d $'\0' jpeg_file; do
  # Extract the filename without the extension
  filename=$(basename "$jpeg_file" .JPG)

  # Construct the output filename
  webp_file="$output_dir/${filename}.webp"

  # Use ffmpeg to convert the JPEG to WebP
  ffmpeg -i "$jpeg_file" -c:v libwebp -lossless 0 -quality 80 "$webp_file"

  # Optional: Print a message to the console indicating the conversion
  echo "Converted: $jpeg_file to $webp_file"
done

echo "Conversion complete."
