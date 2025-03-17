import CONFIG from "../config.js";

/**
 * Creates a formatted page title by combining the page title with the site title
 * @param {string} title - The page title
 * @returns {string} The formatted title
 */
export function createTitle(title) {
  // Handle empty or invalid title
  if (!title || typeof title !== "string") {
    return CONFIG.siteTitle;
  }

  // Trim whitespace from title and separator
  const cleanTitle = title.trim();

  // If title is empty after trimming, just return site title
  if (cleanTitle === "") {
    return CONFIG.siteTitle;
  }

  return `${cleanTitle} | ${CONFIG.siteTitle}`;
}
