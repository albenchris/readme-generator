// Table of Contents function
function renderTableOfContents(tableOfContents) {
  if (!tableOfContents) return '';

  return `## Table of Contents
${tableOfContents.map(item => {
  return `* [${item}](#${item.toLowerCase()})
`})
.join('')}
`;
};

// Instruction functions start
function renderInstallation(installation) {
  if (!installation) return '';

  return `## Installation
${installation}
`;
};

function renderUsage(usage) {
  if (!usage) return '';

  return `## Usage
${usage}
`;
};
// Instruction functions end

// Licensce functions start
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    case 'ISC': return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    case 'GPL-v3': return '![License: GPL-v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case 'Apache-v2': return '![License: Apache-v2](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
};

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'ISC': return 'https://opensource.org/licenses/ISC';
    case 'GPL-v3': return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache-v2': return 'https://opensource.org/licenses/Apache-2.0';
  }
};

function renderLicenseSection(license) {
  if (license == 'none') return '';

  return `## License
${license}: ${renderLicenseLink(license)}
`;
};
// License functions end

// Contributing functions start
function renderContributing(contributing) {
  if (!contributing) return '';

  return `## Contributing  
${contributing}
`;
};

function renderTests(tests) {
  if (!tests) return '';

  return `## Tests
${tests}
`;
};
// Contributing functions end

// Questions/Contact functions start
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
`;
};
// Questions/Contact functions end

// main function to generate README file
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
