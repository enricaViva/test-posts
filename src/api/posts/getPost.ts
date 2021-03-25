const getPost = (id: string) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
    .then((response) => {
        return response.json();
    })
    .catch((error: Error) => {
        console.error(error);
    });

export default getPost;
