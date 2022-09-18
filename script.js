
const axios = require("axios");

let  personList = ["hello"];


complete = async () => {

  const response = await axios.post("http://192.168.1.92:9090/api/v1/user/login", {
        "email" : "nishant@gmail.com",
        "password" : "nepaltar"
      });

      const token = response.data.jwt_token;

      const result = await axios.get("http://192.168.1.92:9090/api/v1/post", {
          headers : {
            Authorization : `Bearer ${token}`
          }
          });
      console.log(result.data);

}


complete();
//  async function login(){}

//  login =  async (emailData, passwordData) => {
//   const response = await axios.post("http://192.168.1.92:9090/api/v1/user/login", {
//     "email" : emailData,
//     "password" : passwordData
//   });
//   console.log(response.data)
//  }

//  login("nishant@gmail.com", "nepaltar");


//  fetchPosts = async () => {
//  try {
//   const result = await axios.get("http://192.168.1.92:9090/api/v1/post", {
//   headers : {
//     Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOiIwNmRhMGYxNi0yMjQ0LTQzODctODRmMi1lNmQyMTgwZmM3NzUiLCJpYXQiOjE2NjM0NzU2NDN9.oDM4S0nNt6SuwNShHtExXXx86usmLzfCAhiS7FKTUvU"
//   }
//   })
//   console.log(result.data);
//  } catch (error) {
//   console.log(error);
//  }
//  }

// fetchPosts();
// fetchData=  async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');

//   const listData = response.data;
//   for(user in listData){
//     // console.log(listData[user]['title']);
//      console.log(`Name : ${listData[user].name}`);
//      console.log(`Email : ${listData[user].email}`);
   
//   }

 
// }

// fetchData();


// for (p in  personList) {
//   let li = document.createElement("li");
//   let node = document.createTextNode(personList[p]);
//   li.appendChild(node);
//   container.appendChild(li);
// }
