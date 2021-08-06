const UserDetail = new URL(location).searchParams.get(`user`);
console.log(UserDetail);

const user = JSON.parse(UserDetail);

console.log(user);

const userAll = document.getElementById(`userAll`);


userAll.innerHTML = `<h2>${user.id} - ${user.name} - ${user.username}</h2> <p>${user.email}</p> <p>${user.address.street} - ${user.address.suite} ${user.address.city}; ${user.address.geo.lat} - ${user.address.geo.lng} </p> <h3>${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs} </h3>`;

const userPostTitle = document.createElement(`button`);
userPostTitle.innerHTML = `Get All Posts Title`;
userAll.appendChild(userPostTitle);
const divOfPosts = document.createElement(`div`);
document.body.appendChild(divOfPosts)


userPostTitle.onclick = function () {
    divOfPosts.classList = `flex`;
    divOfPosts.style.display = `flex`


    console.log(`click`);
    if (divOfPosts.innerText === ``) {
        fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
            .then((value => value.json()))
            .then(posts => {
                console.log(posts);
                for (const post of posts) {
                    console.log(post.title);

                    const divOfPost = document.createElement(`div`);
                    divOfPost.innerHTML = `<h3>${post.title}</h3>`;

                    divOfPosts.appendChild(divOfPost);

                    const postLink = document.createElement(`a`);
                    postLink.innerText = `See Post Details`;
                    // const {id} = post   // id = post.id
                    // console.log(id)

                    postLink.href = `postDetails.html?post=${JSON.stringify(post)}`;

                    divOfPost.appendChild(postLink);

                    userPostTitle.innerHTML = `Hide All Posts Title`;

                }


            })
    } else {
        userPostTitle.innerHTML = `Get All Posts Title`;
        divOfPosts.innerText = ``;
        divOfPosts.style.display = `none`

    }

}
