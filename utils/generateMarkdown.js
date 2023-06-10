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
function generateMarkdown(data) {
  const template = 
`# Title
${data.projectTitle}
## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage Instructions](#usage-instructions)
  - [Contribution](#contribution)
  - [Questions/Contact](#questionscontact)

## Description
${data.projectDesc}
## Installation

Run the following command to install
\`\`\`bash
${data.projectInstall}
\`\`\`

## Usage instructions

Run the following command to use the program
\`\`\`bash
${data.useCommands}
\`\`\`
${usageInstructions}

## Contribution
${data.projectContr}
## Questions/Contact

Use the following contact info to ask any questions you might have:
  - Github: ${github}
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
