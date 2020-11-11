import React, { Component } from 'react'
import axios from 'axios';

export const Context = React.createContext()

class ContextApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             isUserLoggedIn: false,
             token: "",
        }
    }

    componentDidMount() {
        console.log("Compononent Monted")
        const url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(url)
        .then(response => {
            this.setState({
                posts: response.data.slice(0, 50)
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleLogin = (data) => {
        axios.post('http://localhost:8000/api/login/', data)
        .then(response => {
            this.setState({
                isUserLoggedIn: true,
                token: response.data['access']
            })
            localStorage.setItem('token', response.data['access'])
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <Context.Provider value={
                {
                    ...this.state,
                    login: this.handleLogin,
                }
            }>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextApi;
