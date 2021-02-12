function renderTableOfContents(tableOfContents) {
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

function renderInstallation(installation) {
  if (!installation) {
    return '';
  }

  return `## Installation

${installation}
`;
};

function renderUsage(usage) {
  if (!usage) {
    return '';
  }

  return `## Usage

${usage}
`;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderContributing(contributing) {
  if (!contributing) {
    return '';
  }

  return `## Contributing
  
${contributing}
`;
};

function renderTests(tests) {
  if (!tests) {
    return '';
  }

  return `## Tests
  
${tests}
`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderTableOfContents(data.tableOfContents)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}

${renderContributing(data.contributing)}
${renderTests(data.tests)}
`;
};

module.exports = generateMarkdown;
