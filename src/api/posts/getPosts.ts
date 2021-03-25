const getPosts = () => fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    .then((response) => {
        return response.json();
    })
    .catch((error: Error) => {
        console.error(error);
    });

export default getPosts;
