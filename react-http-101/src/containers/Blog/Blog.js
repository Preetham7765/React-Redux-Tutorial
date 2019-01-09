import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

class Blog extends Component {


    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?submit-query=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;