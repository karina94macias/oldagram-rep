const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol", 
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

const postEl = document.getElementById("post")

function generateHTMLPost(postArray) {

    let postHTML = ""
    
    for (let i = 0; i < postArray.length; i++){
        let iconHeart = ""
        
        if (postArray[i].isLiked) {
            iconHeart = "icon_heart_liked.png"
        }else {
            iconHeart = "icon-heart.png"
        }
        
        postHTML += `
            <section id="post">
                <div class="publisher-data">
                    <img src="${postArray[i].avatar}" id="publisher-avatar">
                        <div>
                            <p id="publisher-name" class="bold">${postArray[i].name}</p>
                            <p id="publisher-location">${postArray[i].location}</p>
                        </div>
                </div>
                            
                <img src="${postArray[i].post}" id="post-img">
                            
                <div class="icons">
                    <img src="images/${iconHeart}" class="icon" onclick="incrementLikes(${i})">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                            
                <div class="comment-section">
                    <p id="likes" class="bold">${postArray[i].likes} likes</p>
                    <p id="comment"><span id="username" class="bold">${postArray[i].username}</span> ${postArray[i].comment}</p>
                </div>
        </section>
        `
    }
    
    return postHTML
}

function render() {
    postEl.innerHTML = generateHTMLPost(posts)
}

function incrementLikes(index) {
    if(posts[index].isLiked === false){
        posts[index].likes = posts[index].likes + 1
        posts[index].isLiked = true
        render()
        
    }else {
        posts[index].likes = posts[index].likes - 1
        posts[index].isLiked = false
        render()  
    }
}

render()