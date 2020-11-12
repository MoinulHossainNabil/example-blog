import React, {useState, useEffect} from 'react'
import Post from './Post';
import axios from 'axios';

export default function UserPost() {
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPost = () => {
        let localhost = "http://localhost:8000"
        let endpoint = '/api/get_posts/'
        axios.get(localhost + endpoint)
        .then(response => {
            setPost(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        loading?<div>Loading</div>
        :posts.map(post => (
            <Post post={post} key={post.id} endpoint="/user_posts/" />
        ))
    )
}
