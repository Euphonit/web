const fs = require("fs");
const path = require("path");

// --- Configuration ---
const PHOTOS_DIR = path.join(process.cwd(), "public", "Photography");
const OUTPUT_FILE = path.join(process.cwd(), "public", "photo-lists.json");
const BASE_NAME_CUTOFF = 15;
const PHOTO_REGEX = /\.(JPG|jpg|avif|AVIF|png|PNG)$/i;
// ---------------------

const allPhotoLists = {};

/**
 * Processes a single photo directory, reading the filenames and
 * conditionally formatting the output based on the directory ID.
 */
function processDirectory(dirId) {
  const dirPath = path.join(PHOTOS_DIR, dirId);

  // Convert dirId to an integer for comparison
  const dirNumber = parseInt(dirId);

  // ⭐️ MODIFICATION: Force useBaseName for 'best' OR if it meets the numeric cutoff
  const useBaseName =
    dirId === "best" ||
    (dirId === dirNumber.toString() && dirNumber >= BASE_NAME_CUTOFF);

  if (fs.existsSync(dirPath)) {
    console.log(
      `Processing directory: ${dirId} (Use Base Name: ${useBaseName ? "Yes" : "No"})`,
    );
    const files = fs.readdirSync(dirPath);

    const photoFilenames = files.filter((file) => PHOTO_REGEX.test(file));

    let photoList;

    if (useBaseName) {
      // Store only the unique base name (e.g., "mr council pop")
      const baseNames = new Set();

      photoFilenames.forEach((filename) => {
        const parsed = path.parse(filename);
        baseNames.add(parsed.name);
      });

      photoList = Array.from(baseNames);
    } else {
      // Store the full filename for older numeric directories
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
    const directoryKeys = fs
      .readdirSync(PHOTOS_DIR)
      .filter((name) => fs.statSync(path.join(PHOTOS_DIR, name)).isDirectory());

    directoryKeys.forEach(processDirectory);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allPhotoLists, null, 2));

    console.log(`\nSuccessfully generated photo list to: ${OUTPUT_FILE}`);
    console.log(`Total directories processed: ${directoryKeys.length}`);
  } catch (error) {
    console.error("Error generating photo list:", error.message);
    if (error.code === "ENOENT") {
      console.error(
        `Check that the directory ${PHOTOS_DIR} exists and contains photo folders.`,
      );
    }
    process.exit(1);
  }
}

generatePhotoList();
