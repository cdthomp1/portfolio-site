---
title: 'Making a Mini Wiki with the SpaceX Api and Next.js'
date: 'Aug 10, 2021'
excerpt: 'This is an application to explore the SpaceX Api, Nextjs, and Tailwind'
cover_image: 'https://res.cloudinary.com/cameron-projects/image/upload/v1628575981/SpaceX_Mini_Wiki_hp5hck.png'
---

Tl;Dr;
I made a Mini Wiki using the [SpaceX Api](https://github.com/cdthomp1/spacex-mini-wiki) and I learned a lot! I used Next.js and Tailwind CSS to build the application that can be viewed [here](https://spacex-mini-wiki.vercel.app). The repo for this project can be found [here](https://github.com/cdthomp1/spacex-mini-wiki)

Mini wikis are an awesome way to learn how to work with an Api. There are several free Api's out there that provide informational data. For example, I have seen a couple of mini wiki's being made out of the Harry Potter Api and the Rick and Morty Api. These are great projects if you are learning a new framework or library as you need to read, transform, and display data. Occasionally, you can add a way to take user input to search for data or update data (depending on the Api rules).

[Live Site](https://spacex-mini-wiki.vercel.app)

[Repo](https://github.com/cdthomp1/spacex-mini-wiki)

## The SpaceX Api

The [SpaceX Api](https://github.com/cdthomp1/spacex-mini-wiki) , is an unofficial open source REST Api for SpaceX launch, rocket, core, capsule, starlink, launchpad, and landing pad data. This Api is what I use on my [site](https://cameronthompson.io) to show the latest and upcoming launch information. For this project, I am going to use this Api to explore the rocket, launches, astronauts, and capsule information.

## Getting Started

### The Boiler Plate

Getting started was super easy, using the script to generate a starter Next.js project I was able to get up and running in no time! After the script completed running, I removed unneeded code and files. The api directory can be thrown out, as well as the `Home.module.css` file. I cleaned out the `styles.css` file as well removed the boiler plate code from `index.js`

### Creating the pages

I am going need four additional pages for this project. Since I wanted to highlight the rocket, launches, astronauts, and capsule information from the Api, I created a page for each of these. Each of these pages functionally do the same thing, get the respective data from the Api and pass the data in as a prop to the `Card` component.

Here is the card component:

```javascript
import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Card = ({ document }) => {
   const { name, image, link } = document;
   return (
      <div className='w-60 h-72 flex flex-col items-center justify-around mx-auto bg-white rounded-md filter drop-shadow-greenDrop my-5 p-4'>
         <div className='p-1'>
            <img className='object-scale-down h-44' src={image} />
         </div>
         <h2 className='mx-auto font-bold text-black'>{name}</h2>
         <div className='mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop'>
            <Link href={link}>Learn More</Link>
         </div>
      </div>
   );
};

export default Card;
```

As long as the data being passed in has the properties of `name`, `image`, and `link`, the data will be shown on the card.

Here is the code for the Astronauts page:

```javascript
import React from 'react';
import Card from '../components/Card';
import { getAstronauts } from '../utils/utils';

const astronauts = ({ astronauts }) => {
   return (
      <>
         <h1 className='text-center text-white xl:text-9xl md:text-9xl sm:text-9xl text-5xl p-5 font-barcode'>
            SpaceX Astronauts
         </h1>
         <div className='w-11/12 mx-auto flex flex-wrap gap-x-4'>
            {astronauts.map((astronaut, index) => (
               <Card key={index} document={astronaut} />
            ))}
         </div>
      </>
   );
};

export async function getStaticProps() {
   let astronauts = await getAstronauts();

   return {
      props: {
         astronauts,
      },
   };
}

export default astronauts;
```

You will notice that Astronauts page uses a function from the `utils` file. We will go over that more in the [Getting Data](#getting-data) section of this article.

Each of the cards has a link to display more information about the rocket, astronaut, launch, ect. This is where I had to be subjective on the data I wanted to display as the Api has lots of data (please note, the astronaut endpoint is very small, so I used all of the data returned)!

The pages to display launch data, rocket data, and dragon data are set up very similar to the astronaut page. The only difference is the data being displayed. The launch, rocket, and dragon endpoint have a lot of properties that are returned. I chose data that I thought was the most interesting and the most common. Of course you can render any of the properties as you see fit.

### Getting Data

Since I use a handful of endpoints of the SpaceX Api, I decided it would be best to have a set of functions that I can use throughout the application. I created a `utils` folder and file in the root directory. I then filled it with the functions I needed to get the data.

Here is a function:

```javascript
export async function getLaunches() {
   const resLaunches = await fetch('https://api.spacexdata.com/v4/launches');
   const launchesData = await resLaunches.json();
   if (resLaunches.status !== 200) {
      return {
         message: 'Error Getting Launches',
      };
   }
   let launches = launchesData.map((launch) => {
      let img;
      if (launch.links.patch.small === null)
         img =
            'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg';

      return {
         name: launch.name,
         image: launch.links.patch.small || img,
         link: `/launch/${launch.id}`,
      };
   });

   return launches;
}
```

All of my functions follow a similar pattern to get the required data. This example function us handy as it checks to see if there is an image for the mission patch (as future missions are listed and not yet have a patch). I could remove those future missions, that would help solve this solution, but if a past mission patch is missing I would not have an image to show.

The endpoints that I call in the utils file return all of the data for that category. A future enhancement would be to store the responses in state so I don't have to make an additional Api call to get a single object (as far as I can tell, getting an object by Id returns the same properties as the objects returned on the "everything" endpoint).

### Styling

You can learn a lot from using an Api and presenting it on the page, but why not style your project so when you show others they can tolerate looking at it? I chose to use Tailwind CSS to style my project. I was nervous as it was the second project I have used with it but it turned out to be an awesome experience. Using Tailwind was fast, and simple to get the look I was going for. An additional plus was their documentation on how to extend some of their styles so I could add custom fonts, colors, and shadows.

## Lessons Learned

Here are the main lessons that I learned while working on this project

-  The SpaceX Api is extensive and has lots of information
-  Tailwind CSS helps me develop applications faster
-  Next.js is powerful and has lots of awesome features

### Future Enhancements

There are a few things I can improve on in this application

-  Manage data through state, to limit the amount of api calls
-  Using Next image can help with larger images that need to load (especially on the launches page where there can be dozens of large images)
-  Look into using serverless functions to help limit the amount of work the client needs to do making api calls

This was a great project to work on and I hope this helps you want to make your own Mini WikiTl;Dr;
I made a Mini Wiki using the [SpaceX Api](https://github.com/cdthomp1/spacex-mini-wiki) and I learned a lot! I used Next.js and Tailwind CSS to build the application that can be viewed [here](https://spacex-mini-wiki.vercel.app). The repo for this project can be found [here](https://github.com/cdthomp1/spacex-mini-wiki)

Mini wikis are an awesome way to learn how to work with an Api. There are several free Api's out there that provide informational data. For example, I have seen a couple of mini wiki's being made out of the Harry Potter Api and the Rick and Morty Api. These are great projects if you are learning a new framework or library as you need to read, transform, and display data. Occasionally, you can add a way to take user input to search for data or update data (depending on the Api rules).

[Live Site](https://spacex-mini-wiki.vercel.app)

[Repo](https://github.com/cdthomp1/spacex-mini-wiki)

## The SpaceX Api

The [SpaceX Api](https://github.com/cdthomp1/spacex-mini-wiki) , is an unofficial open source REST Api for SpaceX launch, rocket, core, capsule, starlink, launchpad, and landing pad data. This Api is what I use on my [site](https://cameronthompson.io) to show the latest and upcoming launch information. For this project, I am going to use this Api to explore the rocket, launches, astronauts, and capsule information.

## Getting Started

### The Boiler Plate

Getting started was super easy, using the script to generate a starter Next.js project I was able to get up and running in no time! After the script completed running, I removed unneeded code and files. The api directory can be thrown out, as well as the `Home.module.css` file. I cleaned out the `styles.css` file as well removed the boiler plate code from `index.js`

### Creating the pages

I am going need four additional pages for this project. Since I wanted to highlight the rocket, launches, astronauts, and capsule information from the Api, I created a page for each of these. Each of these pages functionally do the same thing, get the respective data from the Api and pass the data in as a prop to the `Card` component.

Here is the card component:

```javascript
import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Card = ({ document }) => {
   const { name, image, link } = document;
   return (
      <div className='w-60 h-72 flex flex-col items-center justify-around mx-auto bg-white rounded-md filter drop-shadow-greenDrop my-5 p-4'>
         <div className='p-1'>
            <img className='object-scale-down h-44' src={image} />
         </div>
         <h2 className='mx-auto font-bold text-black'>{name}</h2>
         <div className='mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop'>
            <Link href={link}>Learn More</Link>
         </div>
      </div>
   );
};

export default Card;
```

As long as the data being passed in has the properties of `name`, `image`, and `link`, the data will be shown on the card.

Here is the code for the Astronauts page:

```javascript
import React from 'react';
import Card from '../components/Card';
import { getAstronauts } from '../utils/utils';

const astronauts = ({ astronauts }) => {
   return (
      <>
         <h1 className='text-center text-white xl:text-9xl md:text-9xl sm:text-9xl text-5xl p-5 font-barcode'>
            SpaceX Astronauts
         </h1>
         <div className='w-11/12 mx-auto flex flex-wrap gap-x-4'>
            {astronauts.map((astronaut, index) => (
               <Card key={index} document={astronaut} />
            ))}
         </div>
      </>
   );
};

export async function getStaticProps() {
   let astronauts = await getAstronauts();

   return {
      props: {
         astronauts,
      },
   };
}

export default astronauts;
```

You will notice that Astronauts page uses a function from the `utils` file. We will go over that more in the [Getting Data](#getting-data) section of this article.

Each of the cards has a link to display more information about the rocket, astronaut, launch, ect. This is where I had to be subjective on the data I wanted to display as the Api has lots of data (please note, the astronaut endpoint is very small, so I used all of the data returned)!

The pages to display launch data, rocket data, and dragon data are set up very similar to the astronaut page. The only difference is the data being displayed. The launch, rocket, and dragon endpoint have a lot of properties that are returned. I chose data that I thought was the most interesting and the most common. Of course you can render any of the properties as you see fit.

### Getting Data

Since I use a handful of endpoints of the SpaceX Api, I decided it would be best to have a set of functions that I can use throughout the application. I created a `utils` folder and file in the root directory. I then filled it with the functions I needed to get the data.

Here is a function:

```javascript
export async function getLaunches() {
   const resLaunches = await fetch('https://api.spacexdata.com/v4/launches');
   const launchesData = await resLaunches.json();
   if (resLaunches.status !== 200) {
      return {
         message: 'Error Getting Launches',
      };
   }
   let launches = launchesData.map((launch) => {
      let img;
      if (launch.links.patch.small === null)
         img =
            'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg';

      return {
         name: launch.name,
         image: launch.links.patch.small || img,
         link: `/launch/${launch.id}`,
      };
   });

   return launches;
}
```

All of my functions follow a similar pattern to get the required data. This example function us handy as it checks to see if there is an image for the mission patch (as future missions are listed and not yet have a patch). I could remove those future missions, that would help solve this solution, but if a past mission patch is missing I would not have an image to show.

The endpoints that I call in the utils file return all of the data for that category. A future enhancement would be to store the responses in state so I don't have to make an additional Api call to get a single object (as far as I can tell, getting an object by Id returns the same properties as the objects returned on the "everything" endpoint).

### Styling

You can learn a lot from using an Api and presenting it on the page, but why not style your project so when you show others they can tolerate looking at it? I chose to use Tailwind CSS to style my project. I was nervous as it was the second project I have used with it but it turned out to be an awesome experience. Using Tailwind was fast, and simple to get the look I was going for. An additional plus was their documentation on how to extend some of their styles so I could add custom fonts, colors, and shadows.

## Lessons Learned

Here are the main lessons that I learned while working on this project

-  The SpaceX Api is extensive and has lots of information
-  Tailwind CSS helps me develop applications faster
-  Next.js is powerful and has lots of awesome features

### Future Enhancements

There are a few things I can improve on in this application

-  Manage data through state, to limit the amount of api calls
-  Using Next image can help with larger images that need to load (especially on the launches page where there can be dozens of large images)
-  Look into using serverless functions to help limit the amount of work the client needs to do making api calls

This was a great project to work on and I hope this helps you want to make your own Mini Wiki
