// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        console.log(value)
        let div = document.createElement(`div`)

        for (const ell of value) {
            let innerDiv = document.createElement(`div`)
            let h2 = document.createElement(`h2`)
            h2.innerHTML = `${ell.id} - ${ell.userId} -- ${ell.title} <br> <p>${ell.body}</p>`
            innerDiv.appendChild(h2)

            let btn = document.createElement(`button`)
            btn.innerText = `See Coments`
            btn.style = `background-color: blue;
                        border: none;
                        color: white;
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer;
                        margine: auto`

            let comentsDiv = document.createElement(`div`)
            comentsDiv.style.display = `none`

            btn.onclick = function () {
                if (comentsDiv.style.display === `none`) {
                    if (comentsDiv.innerText === ``) {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${ell.id}/comments`)
                            .then(value1 => value1.json())
                            .then(value1 => {
                                console.log(value1)
                                for (const coment of value1) {
                                    console.log(coment)
                                    let comentsP = document.createElement(`p`)
                                    comentsP.innerHTML = `${coment.email} - <br> <h3>${coment.body}</h3>`
                                    comentsDiv.appendChild(comentsP)
                                }
                                innerDiv.appendChild(comentsDiv)
                            })
                    }
                    comentsDiv.style.display = `block`
                    btn.innerText = `Hide Comments`
                } else {
                    comentsDiv.style.display = `none`
                    btn.innerText = `See Coments`

                }
            }

            innerDiv.appendChild(btn)
            div.appendChild(innerDiv)
        }
        document.body.appendChild(div)
    })