# 🔐📚 WDV353: Module 3 ⤑ Assignments Repo

![Repo Banner](https://www.dropbox.com/scl/fi/2tg9yj1my4tu4e6r3ryhq/repobanner.png?rlkey=u81eqfslsjercs9je5r13s52u&raw=1)

## 🔗 Student info

**♑ Full Name:** Emily Travo <br>
**🔑 Student ID:** 0005303522 <br>
**⌛ Timezone:** PST <br>
📬 Contact: EATravo@student.fullsail.edu

![Degree Program](https://img.shields.io/badge/Degree-Web%20Development-orange?logo=gnometerminal)
<br>

## 🛠 Installation

> ⚠️⚠️ **Node.js v18+** or _higher_ is required to run this program. If you are using an older version of Node, you will need to install **node-fetch** for data retrieval to work.

#### Node-fetch install (for Node < 18):

`npm install node-fetch`

### How to run:

In your terminal, please enter the following commands to launch the server: <br><br>`nodemon server` <br>_or_ <br>`node server`

#### For testing/developmental purposes, run:

`npm run dev`

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Bash Script](https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white) ![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)

## ⛓️‍💥 Assignment Specs

> **Objective:** Create a Node.js application that interacts with a public geospatial API, retrieves data, and stores it in a MongoDB database. The application should implement RESTful endpoints to trigger these operations and retrieve the stored data. We will be using this data later on in the week.

### Requirements ✨

#### #️⃣0️⃣1️⃣ API Integration

- Choose a public API that provides geospatial data:
  - [x] [Nasa Earth Data](https://eonet.gsfc.nasa.gov/docs/v3#eventsAPI)

#### #️⃣0️⃣2️⃣ MongoDB Integration

- [x] Set up a MongoDB connection in your Node.js application
- [x] Create a schema for storing the geospatial data

#### #️⃣0️⃣3️⃣ Routes and Controllers

- Implement the following routes and their corresponding controllers:
  - [x] **GET**/api/geo-data
    - [x] Accept **query parameters** for specifying the location (e.g, latitude and longitude)
    - [x] Make a fetch call to the chosen geospatial API
    - [x] Parse the response and return it to the client
  - [x] **POST**/api/geo-data
    - [x] Accept geospatial data in the request body
    - [x] Save the data to MongoDB
    - [x] Return a success message with the saved document's ID
  - [x] **GET**/api/geo-data
    - [x] Retrieve **_ALL_** stored geospatial data from MongoDB
    - [x] Implement optional query parameters for filtering
      - [x] Filtering by event name, location & start/end dates
  - [x] **GET**/api/geo-data/:id
    - [x] Retrieve a specific geospatial data entry by it's MongoDB ID

<hr>

### ➡️ JSON boilerplate for POST...

`{
  "name": "Test Event",
  "date": "2025-02-19T00:00:00Z",
  "location": {
    "longitude": -120.74,
    "latitude": 35.37
  }
}`

<hr>

#### #️⃣0️⃣4️⃣ Error Handling

- [x] Implement proper error handling for API calls and database operations
- [x] Return appropriate HTTP status codes and error messages

#### #️⃣0️⃣5️⃣ Documentation

- [x] Provide clear comments in your code explaining the functionality of each route and controller
- [x] Create a README.md file with instructions on how to set up and run the application
- [x] A list of the routes and API used. If a key is needed, include the API docs for it.
