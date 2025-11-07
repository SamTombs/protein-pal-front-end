Project 3 - React / Express

<img width="600" alt="LandingMain" src="https://github.com/user-attachments/assets/2fda5d19-b79e-4113-b3ae-2b2cd78bf271" />


# ProteinPal

I created a React app designed to inspire users to shop for protein products.
Aesthetically I wanted to aim for the modern Millenial; Sunday Morning Coffees, Autumnal Walks and nothing to drastic for the eye. 
Users can explore different protein options while discovering motivation to stay consistent with their health goals.

## Inspiration 

Most of us have no idea how much protein we’re really eating. Even regular gym-goers often guess instead of tracking. Yet protein is key if you want to grow muscle, recover, and feel stronger. 
It took me years of crash dieting and working in a high calorie deficit to realize, the focus should be on high protein.
It is very difficult to find out foods with a high amount of protein. I wanted a simple resource where you can get some inspiration, slam it down onto a shopping list and head to the shops. 


View Site https://protein-pal.netlify.app/

Trello https://trello.com/b/K4LelqKs/project-3-protein-pal

## Features

- Register and Sign in to your own account
- View your Shopping Lists
- Create a list view a list of items from Open Food Facts Api
- Add items to your Shopping Cart. 
- View an about page, to gain some insight into the company
- Delete your List

## Tech

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" style="vertical-align:middle;"/> 
  Node.js
</p>

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" style="vertical-align:middle;"/> 
  Express
</p>

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" style="vertical-align:middle;"/> 
  React
</p>

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" style="vertical-align:middle;"/> 
  MongoDB
</p>

<p>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg" width="40" style="vertical-align:middle;"/> 
  Mongoose
</p>

## Rough Drafts

<img src="https://github.com/user-attachments/assets/1aec4788-cd9e-421c-9532-1842daa76bab" alt="landing" width="350" /> <img width="350" alt="shopping-page" src="https://github.com/user-attachments/assets/6a574a78-72d0-457a-a39c-02cbfbc4e875" /> <img width="350"  alt="Lists" src="https://github.com/user-attachments/assets/98a23341-02a3-460b-847e-320745a4da0e" />

## Wire Frames

<img width="200" height="650" alt="React " src="https://github.com/user-attachments/assets/5c0f32ae-651f-4c02-9d85-fe49e179bc57" />

For my react set up, I wanted to split the pages and the other components. For ease of use in this project as it is small scale, I removed extra folders, so I could easily spot my jsx files.

<img width="242" height="517" alt="Express" src="https://github.com/user-attachments/assets/99d64bb7-182d-4163-b883-0081fb1e0205" />

The two main controllers are : (1) Items; where I pull from the api using axios.get (2) Lists, where I have CRUD functionality for the users lists.


## 3rd Party Api

I wanted to keep utilising third party api's, I belive the knowledge gained in implementing them into my websites will help me further in my career. This database is HUGE, initially I wanted to iterate through the whole database, so I could find the top 100 foods based off protein content. This wasnt achievable with my current set up.
Now I just focused on showing the functionality and that it can be done. I sorted the data with proteins_100g and put them in a descending order. I have only selected the item size as 30. Here, I can show the functionality I have implemented on a small scale, with high hopes in future to iterate over the full database!

<img src="https://static.openfoodfacts.org/images/logos/off-logo-horizontal-light.svg" alt="landing" width="200" />


## Future Enhancements

- There is a myriad of further enhancements I would like to make.
- I would like to find a different database. The images arent up to standard. I would like to find a database of foods with professional images attached.
- Cart to have mobile functionality for on the go, whilst in a supermarket.
- CSS: Introduce more font styles, button improvements and mobile responsiveness
- Dark Mode


## Stretch Goals

- [ ] Implement user data, track the users personalised protein goal.
- [ ] Analytics on the user page, how many times a product has been put in shopping cart, etc.
- [ ] Search function, when the database size is increased.











