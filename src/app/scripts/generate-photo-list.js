// scripts/generate-photo-list.js
const fs = require("fs/promises");
const path = require("path");

const PUBLIC_DIR = path.join(process.cwd(), "public");
const PHOTOGRAPHY_BASE_DIR = path.join(PUBLIC_DIR, "Photography");
const OUTPUT_FILE = path.join(process.cwd(), "photo-lists.json");

// Regex to match common photo extensions
const PHOTO_REGEX = /\.(JPG|jpg|webp|avif|png|gif)$/i;
// Regex to match subdirectories starting with '9-'
const DIR_REGEX = /^9-.*$/;

async function generatePhotoLists() {
  console.log("Starting photo list generation...");

  // 1. Read the contents of the base Photography directory
  const baseDirContents = await fs.readdir(PHOTOGRAPHY_BASE_DIR);

  // 2. Filter for directories that start with "9-"
  const photoDirs = baseDirContents.filter((item) => {
    // Check if the item matches the naming convention
    if (!DIR_REGEX.test(item)) {
      return false;
    }
    // We can't easily check if it's a directory without another stat call,
    // so we'll rely on the readdir inside the loop to fail gracefully.
    return true;
  });

  const allPhotoLists = {};

  // 3. Loop through each matching directory
  for (const dirName of photoDirs) {
    const fullDirPath = path.join(PHOTOGRAPHY_BASE_DIR, dirName);

    try {
      console.log(`Processing directory: ${dirName}`);

      // Read files inside the subdirectory
      const filenames = await fs.readdir(fullDirPath);

      // Filter the filenames to only include photo files
      const photoList = filenames.filter((filename) =>
        PHOTO_REGEX.test(filename),
      );

      // Store the list with the directory name as the key
      allPhotoLists[dirName] = photoList;
    } catch (error) {
      // Log errors if an item is not a directory or access fails
      console.warn(
        `Could not read directory ${dirName}. Skipping. Error: ${error.message}`,
      );
    }
  }

  // 4. Save the final map of lists to a single JSON file
  await fs.writeFile(
    OUTPUT_FILE,
    JSON.stringify(allPhotoLists, null, 2), // Pretty print the JSON
    "utf-8",
  );

  console.log(
    `\n✅ Successfully generated photo lists for ${Object.keys(allPhotoLists).length} directories.`,
  );
  console.log(`Output saved to: ${path.basename(OUTPUT_FILE)}`);
}

generatePhotoLists().catch(console.error);
