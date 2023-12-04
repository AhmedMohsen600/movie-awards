import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/authSlice';
import './styles/login.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    dispatch(login({ username, password }));
    setUsername('');
    setPassword('');
  };

  return (
    <form>
      <h2>Login</h2>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          placeholder='enter your username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          placeholder='enter youyr password...'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default LoginForm;
