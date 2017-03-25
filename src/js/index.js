const React = require('react');
const ReactDOM = require('react-dom');

// array with all the users
const storedUsers = require('./users');


const UserComponent = React.createClass({

  render: function(){
    return (
      <div onClick={this.deleteThisUser}>
        <p> <strong>Username</strong>: { this.props.user.username } </p>
        <p> <strong>Mail</strong>: { this.props.user.mail } </p>
      </div>
    );
  },

  deleteThisUser: function(){
    this.props.deleteUser(this.props.user.username);
  }

});


const UserListComponent = React.createClass({

  getInitialState: function(){
    return {
      users: storedUsers
    };
  },

  deleteUser: function(delUser){
    var updatedUsers = this.state.users.filter( value => value.username !== delUser );
    this.setState({ users: updatedUsers });
  },

  render: function(){

    var usersToRender = this.state.users.map(
      (elem, index) => <UserComponent user={elem} key={index} deleteUser={this.deleteUser} />
    );

    return (
      <div>
        {usersToRender}
      </div>
    );
  }

});


ReactDOM.render( <UserListComponent />, document.getElementById('app') );
