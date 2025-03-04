// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();
app.get("/assistant/greet",(req,res)=>{
  try{
    const query=req.query;
    if(!query.name){
      req.status(400).send({message:"Please include name in url as query"});
    }
    const day = new Date();
    console.log(day.getDay())
    const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    
    console.log(query)
    res.status(200).send(
      {
        welcomeMessage: `Hello, ${query.name}! Welcome to our assistant app!`,
        dayMessage: `Happy ${dayArray[day.getDay()]}! Start your week with energy!`
      }
    );

  }catch(error)  {
    res.status(500).send({message:"something went wrong",error:error});
  }
})

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
