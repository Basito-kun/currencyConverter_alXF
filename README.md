# 💱 Currency Converter Web App

A full-stack application that enables users to convert money between currencies using live exchange rates retrieved from a third-party financial API.

The project demonstrates practical backend integration, data flow design, and real-time UI updates.

## 🎯 The Why 

People constantly interact with global markets — shopping online, freelancing, travelling, or sending money internationally.
This application removes guesswork and provides immediate, accurate conversions.

It also serves as a showcase of my ability to:

- build RESTful services

- integrate external APIs

- manage async operations

- connect frontend and backend systems

## ⚙️ Core Features

- ✅ User inputs base currency, target currency, and amount 
- ✅ Frontend sends request to backend 
- ✅ Backend fetches live exchange rates 
- ✅ Server calculates conversion 
- ✅ JSON response returned 
- ✅ UI updates instantly without refresh

## 🧠 System Flow

User → Frontend → Backend → ExchangeRate API
                     ↓
               Calculation
                     ↓
              JSON Response
                     ↓
                UI Update

## 🧰 Tech Stack

### Frontend

- HTML5

- Vanilla JavaScript

- Fetch API

### Backend

- Node.js

- Express

- Axios

### External Service

ExchangeRate API (real-time currency data)

## 📦 Installation & Setup

1. Clone
   git clone https://github.com/YOUR_USERNAME/currency-converter.git
   cd currency-converter

2. Install dependencies
   npm install

3. Add API Key
   const API_KEY = "YOUR_KEY";

4. Run
   node server.js

Visit:
http://localhost:3000

## 🧪 Example API Call
/convert?from=USD&to=NGN&amount=100

Response:
{
  "convertedAmount": 150000
}

## 💡 Engineering Highlights

- Clean separation of responsibilities.

- Server handles security & calculations.

- Client focuses on interaction.

- Real-world API usage.

- Modular and extendable structure.

## 🚀 Possible Extensions

- Currency dropdown selectors

- Rate history charts

- Caching API responses

- Authentication

- Deployment (Render / Railway / VPS)

- TypeScript migration

## 👨‍💻 Author

### Abdulbasit Abubakar 
Software Engineer (Frontend) | JavaScript | API Integration 

abdulbasit.oa7@gmail.com
