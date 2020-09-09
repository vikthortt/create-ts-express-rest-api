#!/usr/bin/env node
const shell = require("shelljs");

const projectName = process.argv[2];
if (!projectName || projectName.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log("A name MUST be provided");
}

const github = "https://github.com/vikthortt/ts-express-rest-api.git";

shell.exec(`git clone --depth=1 ${github} ${projectName}`);
shell.cd(projectName);
shell.exec(`rm -Rf .git`);
shell.exec(`echo ' ' >> .gitignore`);
shell.exec(`echo '# Ignore .env file' >> .gitignore`);
shell.exec(`echo .env >> .gitignore`);
shell.exec(`git init`);
shell.exec(`git add .`);
shell.exec(`git commit -m "initial commit"`);
shell.exec(`npm install`);
