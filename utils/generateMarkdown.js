// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function createLicense (license){
  const types = ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Boost Software License', 'Unlicense'];
  const links = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'];
  const index = types.indexOf(license);
  if(index === -1){
    console.log('Use https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to find your license');
    return '';
  }
  return links[index];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template = 
`${createLicense(data.projectLicense)}
# ${data.projectName}

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
${data.projectUsage}

## Contribution
${data.projectContr}
## Questions/Contact

Use the following contact info to ask any questions you might have:
  - Github: ${data.gitHub}
  - Email: ${data.email}`;
  return template;
}

module.exports = generateMarkdown;
