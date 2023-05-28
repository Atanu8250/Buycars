# Buycars
Company Assignment of Atrryb, 
Here you can sell your cars and also can buy second-hand cars


## Teach-Stack
| UI-Part | Controller | Server-Part |
|---------|------------------|--------------|
|![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)|![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) |![Express.JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Node.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)|

## Deployments
|FRONTEND|BACKEND|DATABASE|
|--------|-------|--------|
|![vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)|![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)|![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## For using this application locally follow the mentioned steps
1. Clone the repo
2. Do `npm install` in both `frontend` and `backend` folder
3. For starting the application go to `frontend` file
4. Run this command in the `frontend` folder `npm run dev` to run the application locally

1. For running the backend
2. Do `npm install` in `backend` folder
3. Run this command `npm run server` to start the backend

## Pages
### :small_blue_diamond: Sign-up Page
Sign-up by providing a unique username, your email & password

----
![signup](https://github.com/Atanu8250/Buycars/assets/94675329/18aea8f9-26b1-4afa-b53c-a8c9bca894a6)


### :small_blue_diamond: Sign-in Page
Sign-in with your unique credentails [email, password]

----
![signin](https://github.com/Atanu8250/Buycars/assets/94675329/89c41ef7-486b-4be5-828c-da9252be4824)


### :small_blue_diamond: Home Page
After successfully authenticated you will be redirected to HOME page, there you will see the list of products, and if you sell any car, for that specific product you will be able to see an edit and delete button. You can change or delete data of your sell product only!

----
![home](https://github.com/Atanu8250/Buycars/assets/94675329/3f39e5d1-5e48-471f-8fae-de13adf5ac96)


### :small_blue_diamond: Update Modal
Clicking on the edit button, you will be able to see this type of modal provided for editing the details, if anything haven't changed then it will not call for the new data.

----
![edit-modal](https://github.com/Atanu8250/Buycars/assets/94675329/69276401-3590-4faf-a282-df9418ceec90)


### :small_blue_diamond:  Page
Sell cars by choosing specific OEM (Original Equipment Manufacturer) and sell cars on the application

----
![sell-cars](https://github.com/Atanu8250/Buycars/assets/94675329/c658744d-506a-4aa0-9e33-e3df516113b2)



---

## API Routes

The following table lists the available API routes and their descriptions:

| Route | Method | Description |
|-------|-------------|----------|
| auth/signup/ | `POST` | Register user's data in Database |
| auth/signin/ | `POST` | By checking user's credentials allow them to log-in in the web-applicattion |
| marketplace/ | `GET` |	Get all available cars for sell |
| marketplace/ | `POST` | Post in the marketplace by posting cars here |
| marketplace/:carId | `PATCH` | Update specific car's details and allowed only for the dealer |
| marketplace/:carId | `DELETE` | Delete specific car and allowed only for the dealer |
| oemspec/ | `GET` | Get all the Original Equipment Manufacturar list |
| oemspec/ | `POST` | Post Original Equipment Manufacturar's data |

Thank you 💙
