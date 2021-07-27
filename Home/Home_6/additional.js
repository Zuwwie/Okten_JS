fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        // console.log(value)
        let div = document.createElement(`div`)
        for (const ell of value) {
            // console.log(ell)
            let innerDiv = document.createElement(`div`)
            let h2 = document.createElement(`h2`)
            h2.innerText = `${ell.id} - ${ell.name} - ${ell.username}`
            innerDiv.appendChild(h2)
            div.appendChild(innerDiv)
            let btn = document.createElement(`button`)
            btn.innerText = `See Posts`
            innerDiv.appendChild(btn)
            let posts = document.createElement(`div`)
            posts.style.display = `none`

            btn.onclick = function () {
                if (posts.style.display === `none`) {
                    posts.style.display = `block`
                    btn.innerText = `Close Post`


                    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
                        .then((response) => response.json())
                        .then((value) => {
                            // console.log(value)

                            for (const post of value) {
                                // console.log(post)
                                let onePost = document.createElement(`div`)
                                onePost.innerHTML = `<h4>${post.title}</h4>`
                                let possBtn = document.createElement(`button`)
                                possBtn.innerText = `See all info`
                                onePost.appendChild(possBtn)
                                posts.appendChild(onePost)


                                let comentsBtn = document.createElement(`button`)
                                comentsBtn.innerText = `See all coments`
                                onePost.appendChild(comentsBtn)

                                let bodyOfPost = document.createElement(`div`)
                                bodyOfPost.innerText = `${post.body}`

                                bodyOfPost.style.display = `none`
                                onePost.appendChild(bodyOfPost)


                                let bodyOfComents = document.createElement(`div`)
                                bodyOfComents.style.display = `none`
                                onePost.appendChild(bodyOfComents)


                                possBtn.onclick = function () {
                                    bodyOfComents.style.display = `none`
                                    comentsBtn.innerText = `See All coments`

                                    // console.log(post.body)
                                    if (bodyOfPost.style.display === `block`) {
                                        bodyOfPost.style.display = `none`
                                        possBtn.innerText = `See all info`

                                    } else {
                                        bodyOfPost.style.display = `block`
                                        possBtn.innerText = `Close info`

                                    }
                                }


                                comentsBtn.onclick = function () {
                                    bodyOfPost.style.display = `none`
                                    possBtn.innerText = `See all info`

                                    if (bodyOfComents.style.display === `none`) {
                                        bodyOfComents.style.display = `block`
                                        comentsBtn.innerText = `Hide coments`
                                        // console.log(bodyOfComents.innerText)

                                       if (bodyOfComents.innerText === ``) { fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                                           .then((response) => response.json())
                                           .then((value) => {
                                               // console.log(value)
                                               for (const comentsEll of value) {
                                                   let oneComents = document.createElement(`p`)
                                                   oneComents.innerText = `${comentsEll.email} --- ${comentsEll.body}`
                                                   bodyOfComents.appendChild(oneComents)
                                               }
                                           });}
                                    } else {
                                        bodyOfComents.style.display = `none`
                                        comentsBtn.innerText = `See All coments`
                                    }
                                }
                            }

                            innerDiv.appendChild(posts)
                        });
                } else {
                    posts.style.display = `none`
                    btn.innerText = `See Posts`


                }
            }

        }
        document.body.appendChild(div)
    })


