// scripts/generate-photo-list.js
const fs = require("fs/promises");
const path = require("path");

// --- Configuration ---
const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const PHOTOGRAPHY_BASE_DIR = path.join(PUBLIC_DIR, "Photography");

// ⭐️ CRITICAL CHANGE: Output file is now inside the public directory
const OUTPUT_FILE = path.join(PUBLIC_DIR, "photo-lists.json");

// Regex to match common photo extensions
const PHOTO_REGEX = /\.(JPG|jpg|webp|avif|png|gif)$/i;
// Regex to match strictly numeric directory names (e.g., 9, 10, 11)
const DIR_REGEX = /^\d+$/;

async function generatePhotoLists() {
  console.log("--- Starting Photo List Generation Script ---");
  console.log(`Targeting base directory: ${PHOTOGRAPHY_BASE_DIR}`);
  console.log(`Outputting to: ${OUTPUT_FILE}`);
  console.log("-------------------------------------------\n");

  const allPhotoLists = {};

  try {
    // Basic check to ensure the root photo directory exists
    await fs.access(PHOTOGRAPHY_BASE_DIR);

    // 1. Read directory contents and filter for directories
    const baseDirContents = await fs.readdir(PHOTOGRAPHY_BASE_DIR, {
      withFileTypes: true,
    });

    const photoDirs = baseDirContents
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter((dirName) => DIR_REGEX.test(dirName));

    console.log(
      `\nFound ${photoDirs.length} matching numeric directories: [${photoDirs.join(", ")}]`,
    );

    // 2. Loop through each matching directory and read files
    for (const dirName of photoDirs) {
      const fullDirPath = path.join(PHOTOGRAPHY_BASE_DIR, dirName);

      try {
        const filenames = await fs.readdir(fullDirPath);

        // Filter the filenames to only include photo files
        const photoList = filenames.filter((filename) =>
          PHOTO_REGEX.test(filename),
        );

        allPhotoLists[dirName] = photoList;
        console.log(
          `  -> Processed ${dirName}: Found ${photoList.length} photos.`,
        );
      } catch (error) {
        console.warn(
          `  -> ⚠️ Warning: Failed to read files in ${dirName}. Error: ${error.message}`,
        );
      }
    }

    // 3. Save the final map of lists to the JSON file
    await fs.writeFile(
      OUTPUT_FILE,
      JSON.stringify(allPhotoLists, null, 2),
      "utf-8",
    );

    console.log(
      `\n✅ Script finished. Total photo lists generated: ${Object.keys(allPhotoLists).length}`,
    );
  } catch (error) {
    console.error(
      `\n❌ CRITICAL SCRIPT FAILURE: Check if ${PHOTOGRAPHY_BASE_DIR} exists.`,
    );
    console.error(error.message);
    // Always write an empty JSON file so the main Next.js build doesn't crash
    await fs.writeFile(OUTPUT_FILE, "{}", "utf-8");
  }
}

generatePhotoLists().catch(console.error);
