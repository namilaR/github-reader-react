import React from 'react';
import axios from 'axios';
import config from '../config';
import { Link } from "react-router-dom";



class RepositoryList extends React.Component {
    state = {
        repoList: [],
        hasError: false

    }

    constructor(props) {
        super(props);
        this.loadReadMe = this.loadReadMe.bind(this);
    }

    componentDidMount() {
        axios.get(config.baseUrl + "/users/" + this.props.match.params.userName + "/repos")
            .then(res => {
                const repoList = res.data;
                if (res.data.length == 0) {
                    this.setState({ hasError: true })

                } else {
                    this.setState({
                        hasError: false,
                        repoList: repoList
                    });
                }


            }, error => {
                this.setState({ hasError: true })
            })
    }

    loadReadMe(repoName) {
        this.props.history.push('/repos/' + this.props.match.params.userName + '/' + repoName)

    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.repoList.map(item => {
                            return <li key={item.id}><Link to={`/repos/${this.props.match.params.userName}/${item.name}`}>{item.name}</Link></li>
                        }
                        )
                    }
                </ul>
                {this.state.hasError ? (
                    <span>No user found</span>
                ) : (
                        <span></span>
                    )}

                <Link to={`/`}>Go Back</Link>
            </div>
        )
    }
}

export default RepositoryList 