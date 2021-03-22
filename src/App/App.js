import './App.css'
import React from 'react'
import Users from '../Data/people.json'
import Characters from '../Components/Characters'
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            userToEdit: {}
        }
    }
    //fetch methods ('/') - GET
    //fetch method ('/') - CREATE
    //fetch methods ('/:id') - GET
    //fetch methods ('/:id') - UPDATE
    //fetch method ('/:id') - DELETE
    getAllUsers = () => {
        console.log(Users)
        this.setState({ users: Users })
        // fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        //     .then(response => response.json())
        //     .then(userData => {
        //         console.log('Success:', userData);
        //         this.setState({ users: userData })
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    displayAllUsers = (users) => {
        const userCards = users.map(user => <a className='user-card' href="#userToEdit" onClick={() => this.getUserToEdit(user.uid)}> {user.name}</a>)
        return (userCards)
    }

    getUserToEdit = (id) => {
        console.log('editing from app.js', id)
        let idToEdit = this.state.users.filter(user => user.uid == id)
        //set state here for info to be edited
        console.log(idToEdit)
        // this.setState({
        //     people
        // })
        // const allUsers = [...this.state.users]
        // const foundUser = allUsers.filter(user => user.id === id)[0]
        // this.setState({ userToEdit: foundUser })
    }
    getUserToDelete = (id) => {
        const allUsers = [...this.state.users]
        const usersAfterDelete = allUsers.filter(user => user.id !== id);
        this.setState({users: usersAfterDelete, userToEdit: {}})
    }
    componentDidMount() {
        this.getAllUsers()
    }
    componentDidUpdate() {

    }

    render() {
        const userCards = this.displayAllUsers(this.state.users)

        return (
            <div>
                <Characters characters={this.state.users} getUserToEdit={(uid)=> this.getUserToEdit(uid)}/>
            </div>
        )
    }
}

 //fetch Template
    // const data = { username: 'example' };


