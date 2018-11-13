const displayPosts = (postList) => {

    const $ulElem = document.querySelector('.posts');

    for (let i = 0; i < postList.length; i++) {

        const post = postList[i];
        const $li = document.createElement('li');
        $li.textContent = `${post.id}. ${post.title}`;
        $ulElem.appendChild($li);
    }
}

export {
    displayPosts
}