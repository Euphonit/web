const fs = require("fs");
const path = require("path");

// --- Configuration ---
// Path to the 'public/Photography' directory where photo folders (e.g., '15', '14') live
const PHOTOS_DIR = path.join(process.cwd(), "public", "Photography");
// Path to the output JSON file
const OUTPUT_FILE = path.join(process.cwd(), "public", "photo-lists.json");
// Directory ID cutoff: directories >= this number will have file extensions stripped
const BASE_NAME_CUTOFF = 15;
// ---------------------

const allPhotoLists = {};

/**
 * Processes a single photo directory, reading the filenames and
 * conditionally stripping the extension based on the directory ID.
 * * @param {string} dirId - The name of the directory (e.g., '15').
 */
function processDirectory(dirId) {
  const dirPath = path.join(PHOTOS_DIR, dirId);

  // Convert dirId to an integer for comparison
  const dirNumber = parseInt(dirId);
  const useBaseName = dirNumber >= BASE_NAME_CUTOFF;

  if (fs.existsSync(dirPath)) {
    console.log(
      `Processing directory: ${dirId} (Stripping extensions: ${useBaseName ? "Yes" : "No"})`,
    );
    const files = fs.readdirSync(dirPath);

    // Filter only the primary image files (assuming they are .JPG)
    const photoFilenames = files.filter((file) => /\.JPG$/i.test(file));

    // Map the filenames to the final format for the JSON
    allPhotoLists[dirId] = photoFilenames.map((filename) => {
      if (useBaseName) {
        // For directory 15 and up, strip the extension (e.g., "01.JPG" -> "01")
        const parsed = path.parse(filename);
        return parsed.name;
      } else {
        // For directories below 15, keep the full filename (e.g., "01.JPG" -> "01.JPG")
        return filename;
      }
    });
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
