const axios = require('axios');
const crypto = require('crypto');
const postsService = require('../service/postsService');

const generate = function () {
    return crypto.randomBytes(20).toString('hex');
}

test('Should get posts', async function () {
    // given - dado que
    const post1 = postsService.savePost({ title: generate(), content: generate() });
    const post2 = postsService.savePost({ title: generate(), content: generate() });
    const post3 = postsService.savePost({ title: generate(), content: generate() });
    //when - quando acontecer
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data;
    //then - então 
});