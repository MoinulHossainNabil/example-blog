import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Comment from './Comment';

export default function UserPostDetails({match}) {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        let localhost = "http://localhost:8000";
        let postUrl = `/api/get_single_post/${match.params.id}/`
        let commentUrl = `/api/get_post_comments/${match.params.id}/`;
        axios.get(localhost + postUrl)
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        axios.get(localhost + commentUrl)
        .then(response => {
            setComments(response.data);
        })
        .then(error => {
            console.log(error);
        })
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[])

    if(loading) {
        return <div>Loading</div>
    }
    return (
      <>
      {/* Post Image */}
        <div className="row my-3 justify-content-center">
          <div className="col-md-8">
            <img
              src="http://placehold.it/750x300"
              alt=""
              className="img-fluid"
              style={{ objectFit: "cover", width: "100%", maxHeight: "300px" }}
            />
          </div>
        </div>
        
      {/* Post Description */}
        <div className="row mt-2 justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5>{post.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-title text-left font-weight-bold">Post Body</p>
                <p className="card-text text-justify">{post.body}</p>
              </div>
            </div>
          </div>
        </div>
      {/* Post Comments */}
        {/* <Comment comments={comments} /> */}
      </>
    );
}
