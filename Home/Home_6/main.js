fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((value => value.json()))
    .then(value => {
        // console.log(value)
        let div = document.createElement(`div`)

        for (const ell of value) {
            let innerDiv = document.createElement(`div`)

            let h2 = document.createElement(`h2`)
            h2.innerText = `${ell.id} - ${ell.title}`
            innerDiv.appendChild(h2)
            let btn = document.createElement(`button`)
            btn.innerText = `More Info`
            innerDiv.appendChild(btn)
            let info = document.createElement(`p`)
            info.innerText = `${ell.body}`
            innerDiv.appendChild(info)
            info.style.display = `none`
            btn.onclick = function () {
                if (info.style.display === `none`) {
                    info.style.display = `block`
                } else {
                    info.style.display = `none`
                }
            }
            div.appendChild(innerDiv)
        }
        document.body.appendChild(div)
    })
fetch(`https://jsonplaceholder.typicode.com/comments
`).then(value => value.json())
    .then(value => {
        let div = document.createElement(`div`)
        for (const postEll of value) {
            // console.log(postEll)
            let innerDiv = document.createElement(`div`)
            let h2 = document.createElement(`h2`)

            h2.innerText = `${postEll.id}  --- ${postEll.name}`
            innerDiv.appendChild(h2)
            let btn = document.createElement(`button`)
            btn.style = `background-color: #4CAF50; /* Green */
                            border: none;
                            color: white;
                            padding: 15px 32px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 16px`
            btn.innerText = `See @mail`
            innerDiv.appendChild(btn)
            div.appendChild(innerDiv)

            let mail = document.createElement(`div`)
            mail.innerText = `${postEll.email}`
            innerDiv.appendChild(mail)
            mail.style.display = `none`

            btn.onclick = function () {
                if (mail.style.display === `none`) {
                    mail.style.display = `block`
                } else {
                    mail.style.display = `none`
                }
            }
        }
        document.body.appendChild(div)
    })
