import React from 'react';
import { withRouter } from "react-router-dom";
class UserName extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userName: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ userName: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // this.setState({ redirect:  });
        this.props.history.push('/repos/'+ this.state.userName)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" onChange={this.handleChange} name="userName" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}

export default  withRouter(UserName)