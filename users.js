const fetchUsers = "https://jsonplaceholder.typicode.com/users"

fetch(fetchUsers)
.then((response => response.json()))
.then(data => showData(data));

function showData(data){
    console.log(data)
    let usuarios = ``;
      for(let i = 0; i < data.length;i++){
        usuarios +=
        `
        <p>${data[i].id} </p>
        <p> ${data[i].name}</p>
        <p>${data[i].email}</p>
        <p>${data[i].phone}</p>
        <p> ${data[i].company.name}</p>
         `
      }
      document.getElementById("users").innerHTML = usuarios
}