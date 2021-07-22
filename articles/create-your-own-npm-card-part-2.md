---
title: 'Create your own npm card! Part 2'
date: 'March 4, 2021'
excerpt: 'This is the second part of the "Create your own NPM Card" series.  We are going to cover testing the...'
cover_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--yMzo95xl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/3i3urc8gk19qdiq1fz1x.png'
---

This is the second part of the "Create your own NPM Card" series.

We are going to cover testing the code locally before we publish to NPM, creating an NPM account, and publishing the package to NPM for all to use!

Link to my repo can be found [here](https://github.com/cdthomp1/cameronthompson)

## Sign up for NPM

### Don't have an account?

Navigate to [npmjs.com](https://npmjs.com) and click sign up.
<img src="https://res.cloudinary.com/cameron-projects/image/upload/v1618728539/cwitj8ojvto2v73ybcni.png" width="800">

Fill in the form and remember your username and password as we will need it soon!

<img src="https://res.cloudinary.com/cameron-projects/image/upload/v1618728568/dafof8aavhhmgvu9buc2.png" width="800">

### Have an account

if you already have an NPM account, navigate to [npmjs.com](https://npmjs.com) and click sign in.

## Test before publish

### Getting ready

Now that we are completed with our package, we can test the package in two ways. One is to type `node index.js` in the command line in our directory. This is a great way to test while we are developing our package and check for errors, functionality, and other debugging needs.

We are going to run a command that will allow us to truly test our package. Type `npm link` in the command line. NPM will install our package for us, even though it is not publish to the NPM Registry. This will allow us to use it as a local package, to make sure we got the package set up correctly.

### Create a test Directory

Open a new terminal window or type `cd ..` to exit your current directory or the directory of your npm package. For this tutorial, I am going to open a new terminal window.

In my new window, I am going to make sure I am in the directory where I keep my projects. For me it is the `Documents` folder. Once I am there, I will create a new directory for us to "link" our package. `mkdir package-testing`

Once inside this directory, type `npm link yourname`.

> If you are on Mac OS and/or you are receiving errors while running `npm link` or `npm link yourname`, a quick solution is to prefix those commands with `sudo` to run them as administrator. For a permanent solution, please read the official NPM solution [here](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

## Publish

Now that our package is working locally and we can use it in a different directory, we are ready to publish to the NPM Registry! Hooray!

> Navigate back to your project directory so that we publish the our code and not our test directory.

We are going to need to login to NPM through the command line. To this, type `npm adduser`. Remember your username and password from a few steps ago? Type them into their appropriate fields to login.

Now that we are logged in and we are ready to publish our package! Type `npm publish --access public` in the terminal to publish.

## You Did It!

Congratulations, you have published your own personal NPM business card for others to use. Give your command to others for them to check out your card. Remember, this is your card, make it YOURS! I would love to see all of your cards in the comments below.
