#!/bin/bash

# Set the directory containing the JPEG files
input_dir="/home/daniel/Code/web/public/Photography/best"  # Replace with the actual path

# Set the directory where you want to save the AVIF files
output_dir="/home/daniel/Code/web/public/Photography/best"  # Replace with the desired output path

# Ensure the output directory exists. If it doesn't, create it.
mkdir -p "$output_dir"

# Loop through all JPEG files in the input directory
find "$input_dir" -type f -name "*.JPG" -print0 | while IFS= read -r -d $'\0' jpeg_file; do
  # Extract the filename without the extension
  filename=$(basename "$jpeg_file" .JPG)

  # Construct the output filename
  avif_file="$output_dir/${filename}.avif"

  # Use ImageMagick (magick) to convert the JPEG to lossless AVIF
  magick "$jpeg_file" -quality 10 "$avif_file"

  # Optional: Print a message to the console indicating the conversion
  echo "Converted: $jpeg_file to $avif_file"
done

echo "Conversion complete."
