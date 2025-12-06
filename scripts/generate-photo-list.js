const fs = require("fs");
const path = require("path");

// --- Configuration ---
// Path to the 'public/Photography' directory where photo folders (e.g., '15', '14') live
const PHOTOS_DIR = path.join(process.cwd(), "public", "Photography");
// Path to the output JSON file
const OUTPUT_FILE = path.join(process.cwd(), "public", "photo-lists.json");
// Directory ID cutoff: directories >= this number will have file extensions stripped
const BASE_NAME_CUTOFF = 15;
// Regex to match relevant photo extensions for all directories (JPG and AVIF)
const PHOTO_REGEX = /\.(JPG|jpg|avif|AVIF|png|PNG)$/i;
// ---------------------

const allPhotoLists = {};

/**
 * Processes a single photo directory, reading the filenames and
 * conditionally formatting the output based on the directory ID.
 * @param {string} dirId - The name of the directory (e.g., '15').
 */
function processDirectory(dirId) {
  const dirPath = path.join(PHOTOS_DIR, dirId);

  // Convert dirId to an integer for comparison
  const dirNumber = parseInt(dirId);
  const useBaseName = dirNumber >= BASE_NAME_CUTOFF;

  if (fs.existsSync(dirPath)) {
    console.log(
      `Processing directory: ${dirId} (Use Base Name: ${useBaseName ? "Yes" : "No"})`,
    );
    const files = fs.readdirSync(dirPath);

    // ⭐️ Step 1: Filter all files using the new PHOTO_REGEX (JPG or AVIF) ⭐️
    const photoFilenames = files.filter((file) => PHOTO_REGEX.test(file));

    let photoList;

    if (useBaseName) {
      // For directories 15 and up: Store only the unique base name (e.g., "DSC01069")
      const baseNames = new Set();

      photoFilenames.forEach((filename) => {
        const parsed = path.parse(filename);
        baseNames.add(parsed.name);
      });

      photoList = Array.from(baseNames);
    } else {
      // For directories below 15 (including 7-14): Store the full filename (e.g., "DSC00001.JPG" or "DSC00001.avif")
      photoList = photoFilenames;
    }

    allPhotoLists[dirId] = photoList;
    console.log(
      `  -> Processed ${dirId}: Found ${photoList.length} unique items.`,
    );
  } else {
    console.log(`Skipping directory: ${dirId} (Path not found: ${dirPath})`);
  }
}

/**
 * Main function to find all photo directories and generate the list.
 */
function generatePhotoList() {
  try {
    // 1. Find all photo directories (e.g., ['11', '15'])
    const directoryKeys = fs
      .readdirSync(PHOTOS_DIR)
      .filter((name) => fs.statSync(path.join(PHOTOS_DIR, name)).isDirectory());

    // 2. Process each directory
    directoryKeys.forEach(processDirectory);

    // 3. Write the final JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allPhotoLists, null, 2));

    console.log(`\nSuccessfully generated photo list to: ${OUTPUT_FILE}`);
    console.log(`Total directories processed: ${directoryKeys.length}`);
  } catch (error) {
    console.error("Error generating photo list:", error.message);
    // If PHOTOS_DIR doesn't exist, provide a helpful error
    if (error.code === "ENOENT") {
      console.error(
        `Check that the directory ${PHOTOS_DIR} exists and contains photo folders.`,
      );
    }
    process.exit(1);
  }
}

// Execute the main function
generatePhotoList();
