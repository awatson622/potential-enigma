// Function to render license badge
function renderLicenseBadge(license) {
  if (license) {
    // Return the appropriate license badge based on the license type
    // Example: return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else {
    // Return an empty string if there is no license
    return '';
  }
}

// Function to render license link
function renderLicenseLink(license) {
  if (license) {
    // Return the appropriate license link based on the license type
    // Example: return `[License](https://opensource.org/licenses/MIT)`
  } else {
    // Return an empty string if there is no license
    return '';
  }
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license) {
    // Return the license section of README with appropriate formatting
    // Example: return `## License
    // This project is licensed under the MIT License
  } else {
    // Return an empty string if there is no license
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  // Return the markdown content based on the data object
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;


