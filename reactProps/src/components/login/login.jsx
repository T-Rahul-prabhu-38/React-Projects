import './login.css'

export const user = {
    email: '',
    password: '',
    loggedIn: false,
  };
  
  // Please note: The login does not actually work!
  // This exercise is just about practicing event handling
  // You'll learn how to add user authentication to React apps later in the course!
  function Login() {
    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Email</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="email" />
        </p>
  
        <p>
          <label>Password</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="password" />
        </p>
  
        <p id="actions">
          <button>Login</button>
        </p>
      </div>
    );
  }
  
  export default Login;
  