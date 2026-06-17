let body = document.querySelector('body');

fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {
    data.users.forEach(user => {
    
      let UserName = user.username;
      let Name = user.firstName + " " + user.lastName;
      let Email = user.email;
      let imgsrc = user.image;


      let div = document.createElement("div");

      div.innerHTML = `
        <img src="${imgsrc}" alt="${UserName}"><br>
        User: ${UserName}<br>
        Name: ${Name}<br>
        Email: ${Email}<br>
      `;
      body.appendChild(div);
     
    });
  })
  .catch(err => console.log("error:", err));