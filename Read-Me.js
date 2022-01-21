function renderLicenseBadge(license) {
    if (license === "ISC") {
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    } else {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
}

const generateMd = answers => 
    `# ${answers.projectName}

${renderLicenseBadge(answers.license)}
    
## Description
    
${answers.description}
    
## Table Of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Test](#test)
    
* [Questions](#questions)
    
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}
    
## License
    
${answers.license}
    
## Contributing
    
${answers.contributing}
    
## Test
    
${answers.test}
    
## Questions
    
Visit my github profile [${answers.githubUser}](https.//github.com/${answers.githubUser})
    
If you have any questions regarding this project, please email me at ${answers.questions}`

module.exports = generateMd