#!/bin/bash

# Set the directory containing both JPEG and WebP files
image_dir="/Users/daniel/Code/web/public/Photography/5"  # Replace with the actual path

# Function to check if a JPEG file has a corresponding WebP file and remove it
remove_duplicate_jpg() {
  local jpg_file="$1"
  local filename=$(basename "$jpg_file" .JPG)  # Handle uppercase .JPG
  local webp_file="$image_dir/${filename}.webp"

  # Check if the WebP file exists
  if [[ -f "$webp_file" ]]; then
    echo "Removing duplicate JPEG: $jpg_file"
    rm "$jpg_file"
  else
    echo "Keeping: $jpg_file (no corresponding WebP)"
  fi
}

# Find all JPG (case-insensitive) files in the directory and process them
find "$image_dir" -type f \( -name "*.jpg" -o -name "*.JPG" \) -print0 | while IFS= read -r -d $'\0' jpg_file; do
  remove_duplicate_jpg "$jpg_file"
done

echo "Duplicate JPEG removal complete."
