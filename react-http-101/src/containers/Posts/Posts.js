import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedPost: null
    }
    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const newPosts = response.data.slice(0, 4);
                const updatedPost = newPosts.map((post) => {
                    return {
                        ...post,
                        author: 'Preetham'
                    }
                });

                this.setState({ posts: updatedPost });

            });

    }

    PostClickHandler(postid) {

        this.setState({ selectedPost: postid });

    }
    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <Link to={"/" + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        content={post.body}
                        author={post.author}
                        clicked={() => this.PostClickHandler(post.id)} />
                </Link>);

        });

        return <section className="Posts">
            {posts}
        </section>
    }
}

export default Posts;