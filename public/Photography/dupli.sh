#!/bin/bash

# Set the directory containing both JPEG and AVIF files
image_dir="/home/daniel/Code/web/public/Photography/15"  # Replace with the actual path

# Function to check if a JPEG file has a corresponding AVIF file and remove it
remove_duplicate_jpg() {
  local jpg_file="$1"
  local filename=$(basename "$jpg_file" .JPG)  # Get filename without the .JPG extension
  local avif_file="$image_dir/${filename}.avif"

  # Check if the AVIF file exists
  if [[ -f "$avif_file" ]]; then
    echo "Removing duplicate JPEG: $jpg_file"
    rm "$jpg_file"
  else
    echo "Keeping: $jpg_file (no corresponding AVIF)"
  fi
}

# Find all JPG (case-insensitive) files in the directory and process them
find "$image_dir" -type f \( -name "*.jpg" -o -name "*.JPG" \) -print0 | while IFS= read -r -d $'\0' jpg_file; do
  remove_duplicate_jpg "$jpg_file"
done

echo "Duplicate JPEG removal complete."
