    async function favori() {
        const name = document.querySelector("h1").innerHTML
        await fetch(`http://localhost:3000/pokemon/${name}`, {
            method: "POST",
            body: JSON.stringify({name})
        })
        document.querySelector("p.fav").style.display = "block"
    }
    async function remove ()
    {
        const name = document.querySelector("h1").innerHTML
        await fetch(`http://localhost:3000/pokemon/${name}`, {
            method: "DELETE",
            body: JSON.stringify({name})
        })
    }
    async function comment() {
        const name = document.querySelector("h1").innerHTML
        const comment = document.querySelector("textarea").value
        await fetch(`http://localhost:3000/pokemon/${name}`, {
            method: "PUT",
            body: JSON.stringify({comment}),
            headers: {
                "content-type": "application/json"
            }
        })
        document.querySelector("p.comment").innerHTML = "commentaire :" + comment
    }
