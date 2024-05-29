const axios = require('axios');

const newComment1 = {
    body: "HELLO WORLD 1",
    postId: 1,
    userId: 123,
};
const newComment2 = {
    body: "HELLO WORLD 2",
    postId: 1,
    userId: 145,
};

const getAllComment = (link) => {
    axios.get(link).then(
        (response) => {
            console.log(response.data["comments"]);
        },
        (error) => {
            console.log(error);
        }
    );
};

async function addComment(link, payload) {
    try {
        const response = await axios.post(link, payload);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getAllComment('https://dummyjson.com/comments');

setTimeout(function () { addComment('https://dummyjson.com/comments/add', newComment1) }, 3000);
setTimeout(function () { addComment('https://dummyjson.com/comments/add', newComment2) }, 2000);
