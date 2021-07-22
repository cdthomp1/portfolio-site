---
title: 'Create your own npm card! Part 1'
date: 'March 4, 2021'
excerpt: 'How to make your own NPM Business Card   In this two part series, I will go over the steps n...'
cover_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--uAjN3QMU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/z8r0vl7jg81g19xbd631.png'
---

# How to make your own NPM Business Card
In this two part series, I will go over the steps needed to create a NPM Business style card that will be shown in the terminal with a simple NPX command. 

This was inspired by a repo I found by Ridermansb. His repo can be found [here](https://github.com/Ridermansb/ridermansb). His is a lot more involved with build and bable scripts. We are just going to focus on what is needed to get your npm business card ready to use!  

Link to my repo can be found [here](https://github.com/cdthomp1/cameronthompson)

## Assumptions

For this tutorial I am assuming that you as already have a Github account as well as a working knowledge of how to install NPM packages to a project. I will also assume you are familiar with Node.js as well as working in the command line. While the steps are not hard for anyone to follow, I won't be going into detail with some of the "straight forward" steps here. 

## Create the project 

### Directory
In your preferred directory, create the directory for your project. I named my directory to be the name of my package. I recommend using your name as your directory/package name. After all, this is your npm business card.  
By typing `mkdir yourname && cd yourname` you will be able to create and step into your new directory.   
<img src="https://dev-to-uploads.s3.amazonaws.com/i/csqxdl76722bqfibivxx.png" width="800" />

### Git Init
Initialize a git repository by typing `git init`.<br>
<img src="https://dev-to-uploads.s3.amazonaws.com/i/71sl8tf6o7w76qnx5ihx.png" width="300px">

### Add Git Remote Repository 
### Have a GitHub Account?
If you have a GitHub account, go ahead an create a new repository and copy the git url. It should be the url of your new repository with `.git` at the end. It will look like this `https://github.com/cdthomp1/cameronthompson.git` <br /> but with your username and repo name.
Once you got that copied, type `git remote add origin your/repo/url`. It will look like this, `git remote add origin https://github.com/cdthomp1/cameronthompson.git`

### Don't Have a GitHub Account?
If you don't have a GitHub account, please read [this](https://guides.github.com/activities/hello-world/) tutorial about getting started with GitHub. The tutorial will guide you through what GitHub is, how to create repositories and branches, making commits, and working with PR's. Once you have completed that tutorial, return here to complete the steps above. 

### NPM init    
To install the needed packages or other packages to your project, we need to initialize our `package.json` file. The easiest way to make and fill in a `package.json` file is to run `npm init` in the terminal in your project directory. If you have done this before, this will be familiar to you. For those that are new to NPM, `npm init` will ask you for some details about your project. You can see how I answered the prompts below, you can match my responses or you can change it up. That will be up to you.

<img src="https://dev-to-uploads.s3.amazonaws.com/i/5z8znh8lzq8lsqq4jhbf.png"  width="800"/>

More info on package.json [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json/)

### Open Code 
If you have VS Code in your path, you can open VS Code in your current directory by typing `code .`
<img src="https://dev-to-uploads.s3.amazonaws.com/i/bm8jturrvyvrnasc8flq.png" width="800">


### Create Index.js
Create a new file called index.js. This is where our code is going to go. 
<img src="https://dev-to-uploads.s3.amazonaws.com/i/3muku6xulhcl643es02r.png" width="800">

Below is the code for the business card. I used a few packages to help style the card and add some functionality. Links for the package are as follows:

- [Boxen](https://www.npmjs.com/package/boxen)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Clear](https://www.npmjs.com/package/clear)
- [Open](https://www.npmjs.com/package/open)

You can install all of the packages above by doing `npm install boxen chalk clear inquirer open`

<img src="https://dev-to-uploads.s3.amazonaws.com/i/pultqrokjnc49esf1be4.png" width="800" />

The code below includes links to the platforms that I am apart of. I also have a link to my website and a small introduction paragraph about myself. If you have found different console styling packages that you would like to use to bring a different look and feel to your card, please do so! And of course, if you are apart of additional or other platforms than the ones listed below, by all means add them! Make this yours! 

How ever you decide to make your card, add your code to your `index.js` file you created earlier. 

```javascript 
#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:camthomp96@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Cameron Thompson"),
    work: `${chalk.white("Student Software Developer")} ${chalk
        .hex("#2b82b2")
        .bold("BYU-I")}`,
    blog: chalk.gray("https://dev.to/") + chalk.whiteBright("cdthomp1"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("DeveloperCam"),
    github: chalk.gray("https://github.com/") + chalk.green("cdthomp1"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("cameron-thompson96"),
    web: chalk.cyan("https://cameronthompson.io"),
    npx: chalk.red("npx") + " " + chalk.white("cameronthompson"),

    labelWork: chalk.white.bold("       Work:"),
    labelBlog: chalk.white.bold("     Blog:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm curious, enthusiastic and student most of the time."
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code,")}`,
        `${chalk.italic("to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());
```

### Add README.md
A good NPM package has a readme file. A great NPM package has a great readme file. Create a readme file and fill it with information along the lines of: what your package is, what does it do, how to run it, additional information that will help users of the package get the most out of it. 

<img src="https://dev-to-uploads.s3.amazonaws.com/i/8efjexqkkk0x29gwq30x.png" width="800">

### Edit package.json
Since our package will be an executable, not a library, we need to add the the 'bin' field to our `package.json` file with the command name we choose. Since this is our business card, our command name should be something tied to us (full name like me, github profile name, or anything that will help distinguish it as you). 

Here is what I did for mine 
```json
  "bin": {
    "cameronthompson": "index.js"
  },
```

So now my `package.json` file looks like this: 

```json
{
  "name": "cameronthompson",
  "version": "0.0.1",
  "description": "My personal NPM business card",
  "main": "index.js",
  "bin": {
    "cameronthompson": "index.js"
  },
  "dependencies": {
    "boxen": "^4.2.0",
    "chalk": "^4.1.0",
    "clear": "^0.1.0",
    "inquirer": "^7.3.3",
    "open": "^7.3.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/cdthomp1/cameronthompson.git"
  },
  "keywords": [
    "NPM",
    "Business",
    "Card",
    "Node"
  ],
  "author": "Cameron Thompson",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/cdthomp1/cameronthompson/issues"
  },
  "homepage": "https://github.com/cdthomp1/cameronthompson#readme"
}
```
This will ensure that when someone types `npx <pacakagename>`, our code will be ran as an executable. 

For more information on the `bin` field, read [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#bin).

In pt.2, I will cover testing the package locally as well as getting an account set up with NPM so that we can publish the package! I will be posting pt.2 very soon, follow me to get notified when it is published! 