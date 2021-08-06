const PostDetails = new URL(location).searchParams.get(`post`);

console.log(PostDetails);

const post = JSON.parse(PostDetails);

console.log(post);

const postDiv = document.getElementById(`postDetail`);
postDiv.innerText = `${post.userId} - ${post.id} - ${post.title} - ${post.body}`;

// const postBtn = document.createElement(`button`);
// postBtn.innerText = `Post Coments`;
// postDiv.appendChild(postBtn);


// postBtn.onclick = function () {
//  console.log(`click`);
// }

const comentsDiv = document.createElement(`div`);
document.body.appendChild(comentsDiv);
comentsDiv.classList = `flex`

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((value => value.json()))
    .then(coments => {
        console.log(coments)
        for (const coment of coments) {
            console.log(coment)
            const comentDiv = document.createElement(`div`);
            comentDiv.innerText = `${coment.name}`;
            comentsDiv.appendChild(comentDiv);
        }
    })