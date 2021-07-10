var form = document.getElementById("myForm")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(" ").join("")

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)

            document.getElementById("image").innerHTML = `<img src="${data.avatar_url}" alt="" class="img-circle img-responsive" />`
            document.getElementById("Followers").innerHTML = data.followers
            document.getElementById("Following").innerHTML = data.following
            document.getElementById("about").innerHTML = data.bio
            document.getElementById("name").innerHTML = data.name
            document.getElementById("location").innerHTML = data.location
            document.getElementById("url").innerHTML = data.url
            document.getElementById("repos").innerHTML = data.public_repos
                // document.getElementById("Followers").innerHTML =
        })

})