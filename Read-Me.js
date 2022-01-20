const generateMd = answers => {
    `# ${answers.title}
    
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
    
    Visit my github profile. [${answers.githubUser}](https.//github.com/${answers.githubUser})
    
    If you have any questions regarding this project, please email me at ${answers.questions}`
}

module.exports = generateMd