import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {updateUserName} from '../../redux/actions';

class PageTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }

        this.onChange = this.onChange.bind(this);
        this.updateUserNameLocal = this.updateUserNameLocal.bind(this);
    }

    componentDidMount = () => {
        // this.setState({name: this.props.user.name});
    }

    onChange = (e) => {
        e.preventDefault();

        this.setState({name: e.target.value});
    }

    updateUserNameLocal = () => {
        this.props.updateUserName(this.state.name);
    }
    
    render() {
        return (
            <div>
                {this.props.user.name} this is Page Tree!!!
                <div>
                    Change Your Name?
                </div>
                    <InputGroup className="col-lg-3">
                        <FormControl 
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        <Button onClick={() => this.updateUserNameLocal(this.state.name)}>Change It</Button>
                    </InputGroup>
                <div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {updateUserName})(PageTree);