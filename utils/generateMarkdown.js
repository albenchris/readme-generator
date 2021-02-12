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
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'ISC': return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    case 'GPL-v3': return '![License: GPL-v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'Apache-v2': return '![License: Apache-v2](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'ISC': return 'https://opensource.org/licenses/ISC';
    case 'GPL-v3': return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache-v2': return 'https://opensource.org/licenses/Apache-2.0';

  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return '';
  }

  return `## License
${license}: ${renderLicenseLink(license)}
`;
};

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

const renderGithub = username => !username ? '' : `* GitHub: [${username}](https://github.com/${username.toLowerCase()})`;
const renderEmail = emailAddress => !emailAddress ? '' : `* Email: ${emailAddress}`;

function renderContact(contactConfirm, github, email) {
  if (!contactConfirm) {
    return '';
  }

  return `## Questions
If you have questions, feel free to contact me here:
${renderGithub(github)}
${renderEmail(email)}
`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderTableOfContents(data.tableOfContents)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderLicenseSection(data.license)}
${renderContributing(data.contributing)}
${renderTests(data.tests)}
${renderContact(data.contactConfirm, data.github, data.email)}
`;
};

module.exports = generateMarkdown;
