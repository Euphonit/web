const fs = require("fs");
const path = require("path");

// --- Configuration ---
const PHOTOS_DIR = path.join(process.cwd(), "public", "Photography");
const OUTPUT_FILE = path.join(process.cwd(), "public", "photo-lists.json");
const BASE_NAME_CUTOFF = 15;

// MODERN SYSTEM: We look for these extensions to establish the list of available photos.
// This includes PNG and JPG. We ignore .avif here because those are the generated thumbs.
const SOURCE_REGEX = /\.(png|PNG|jpg|JPG|jpeg|JPEG)$/i;

// LEGACY SYSTEM: Used for folders < 15. Grabs everything including extensions.
const LEGACY_REGEX = /\.(JPG|jpg|avif|AVIF|png|PNG)$/i;
// ---------------------

const allPhotoLists = {};

/**
 * Processes a single photo directory.
 * - Directories >= 15 or "best": Use the Base Name system (Source -> Thumbnails).
 * - Directories < 15: Use the legacy full-filename system.
 */
function processDirectory(dirId) {
  const dirPath = path.join(PHOTOS_DIR, dirId);

  // Convert dirId to a number. If it's "best", it will be NaN.
  const dirNumber = Number(dirId);

  // LOGIC:
  // 1. Is it the "best" folder?
  // 2. OR is it a number AND is that number 15 or greater?
  const useBaseName =
    dirId === "best" || (!isNaN(dirNumber) && dirNumber >= BASE_NAME_CUTOFF);

  if (fs.existsSync(dirPath)) {
    console.log(`Processing directory: ${dirId}`);

    const files = fs.readdirSync(dirPath);

    if (useBaseName) {
      // MODERN: Index only the base name (e.g., "DSC0123") from source files.
      const baseNames = new Set();
      files.forEach((filename) => {
        if (SOURCE_REGEX.test(filename)) {
          const parsed = path.parse(filename);
          // Safety: Don't index the 'thumbs' folder itself if it exists
          if (parsed.name !== "thumbs") {
            baseNames.add(parsed.name);
          }
        }
      });
      allPhotoLists[dirId] = Array.from(baseNames);
    } else {
      // LEGACY: Index the full filenames (e.g., "DSC00050.JPG")
      allPhotoLists[dirId] = files.filter((file) => LEGACY_REGEX.test(file));
    }

    console.log(`  -> Found ${allPhotoLists[dirId].length} items.`);
  }
}

function generatePhotoList() {
  try {
    const directoryKeys = fs.readdirSync(PHOTOS_DIR).filter((name) => {
      return fs.statSync(path.join(PHOTOS_DIR, name)).isDirectory();
    });

    directoryKeys.forEach(processDirectory);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allPhotoLists, null, 2));

    console.log(`\nSuccessfully generated: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

generatePhotoList();
