// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateTableOfContents(tableOfContents) {
  if (!tableOfContents) {
    return '';
  }

  return `## Table of Contents
${tableOfContents.map(item => {
  return `* [${item}](#${item.toLowerCase()})
`
}).join('')}
`;
};

function generateInstallation(installation) {
  if (!installation) {
    return '';
  }

  return `## Installation

${installation}
`;
};

function generateUsage(usage) {
  if (!usage) {
    return '';
  }

  return `## Usage

${usage}

`
};

function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${generateTableOfContents(data.tableOfContents)}
${generateInstallation(data.installation)}
${generateUsage(data.usage)}
`;
};

module.exports = generateMarkdown;
