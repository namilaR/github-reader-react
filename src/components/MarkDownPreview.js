import React from 'react';
import axios from 'axios';
import config from '../config';
import ReactMarkdown  from 'react-markdown';
import { Link } from "react-router-dom";
class MarkDownPreview extends React.Component {
    
    state = {
        preview: '',
        hasError: false
    }

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        axios.get(config.baseUrlRaw +'/' + this.props.match.params.userName +'/'+ this.props.match.params.mdFileName+'/master/README.md')
            .then(res => {
                const preview = res.data;
                 this.setState({
                     hasError: false, 
                     preview:preview
                     });

            },
            error =>{
                this.setState({ hasError:true });

            })
    }




    render() {
        return (
            <div>
               <ReactMarkdown source={this.state.preview} />
               {this.state.hasError ? (
                   <span>No readme found</span>
               ) : (
                   <span></span>
               )}

                <Link to={`/repos/${this.props.match.params.userName}`}>Go Back</Link>
            </div>
        )
    }
}

export default MarkDownPreview