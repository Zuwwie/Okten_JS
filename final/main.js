const mainDiv = document.getElementById(`users`);

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((value => value.json()))
.then(users => {
    console.log(users)
    for (const user of users) {
        const userDiv = document.createElement(`div`);
        const userLink = document.createElement(`a`);

        console.log(user);

        userDiv.innerHTML = `<h2>${user.id} - ${user.name} <br> mail = ${user.email}</h2> <p>${user.phone}</p>`;

        userLink.innerText = `Info of user`;

        userLink.href = `userDetail.html?user=${JSON.stringify(user)}`

        userDiv.appendChild(userLink);
        mainDiv.appendChild(userDiv);
    }
})