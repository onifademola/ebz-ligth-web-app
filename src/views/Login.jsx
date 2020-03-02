import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
//import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import FormInput from "components/FormInputs/FormInput.Component.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import { ApiCalls } from '../api/constants';
import { postAxios } from '../api/baseApi';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { decode } from 'jsonwebtoken';

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        const { setCurrentUser } = this.props;
        event.preventDefault();
        const loginData = {
            email: this.state.email,
            password: this.state.password
        }
        const res = await postAxios(ApiCalls.login, loginData, '');
        if (res.status === 200) {
            const token = res.headers['x-auth-token'];
            const decoded_token = decode(token);
            setCurrentUser({user: decoded_token, token});
        } else {
            console.log('Login failed!');
            //setCurrentUser({currentUser: ''});
        }
    };

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={4}>
                            <Card
                                title="Login"
                                content={
                                    <form onSubmit={this.handleSubmit}>
                                        {/* <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Email",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Email",
                                                    //defaultValue: "you@me.com",
                                                    value: `${this.state.email}`,
                                                    handleChange: `${this.handleChange}`
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Password",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Password",
                                                    //defaultValue: "",
                                                    value: `${this.state.password}`,
                                                    //onChange: {handleChange}
                                                }
                                            ]}
                                        /> */}

                                        <FormInput
                                            name='email'
                                            type='email'
                                            handleChange={this.handleChange}
                                            value={this.state.email}
                                            label='email'
                                            required
                                        />
                                        <FormInput
                                            name='password'
                                            type='password'
                                            value={this.state.password}
                                            handleChange={this.handleChange}
                                            label='password'
                                            required
                                        />
                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Sign In
                                        </Button>
                                        <div className="clearfix" />
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
