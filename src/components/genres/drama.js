import React, { Fragment, Component } from 'react';
import axios from 'axios';
import ResultList from '../ResultList'
import {Link} from 'react-router-dom'
import "../../components/style.css"


class Drama extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getDrama()
    }

    getDrama = () => {
        axios.get("/drama").then(res => {
            this.setState({ articles: res.data })
        })
        console.log(this.state.articles)
    }


    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <Fragment>
                <div className="genres">
                    <ul>
                        <li><Link to="/forum">All</Link></li>
                        <li><Link to="/forum/funny">Funny</Link></li>
                        <li><Link to="/forum/horror">Horror</Link></li>
                        <li><Link to="/forum/romance">Romance</Link></li>
                        <li><Link to="/forum/mystery">Mystery</Link></li>
                        <li><Link to="/forum/drama">Drama</Link></li>
                        <li><Link to="/forum/fantasy">Fantasy</Link></li>
                    </ul>
                </div>
                <div className="jumbotron jumbotron-fluid" id="dramatron">
                    <div className="container">
                        <h1 className="display-4 text-center">Drama Stories</h1>
                        <p className="lead text-center">Stop being such a drama queen...</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="createNew float-right">
                        {loggedIn ? (
                            <Link to="/newstory" className="btn btn-warning float-right" role="button">Create New Story</Link>
                        ) : (
                            <Link to="/login" className="btn btn-warning float-right" role="button">Create New Story</Link>
                        )}
                        </div>
                        <div className="posts col-md-12">
                            <ul>
                                {this.state.articles.map(article => (

                                    <ResultList
                                        key={article._id}
                                        id={article._id}
                                        title={article.title}
                                        author={article.author}
                                        description={article.description}
                                    />

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Drama;