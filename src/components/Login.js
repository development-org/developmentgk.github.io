import React, { useState, useRef } from 'react';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const Login = () => {
  const [error, setError] = useState('');

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError('');
      await login(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError('Login failed, Invalid credentials!');
    }
  };

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100 box-sm'>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
            {error && (
              <Alert variant='danger' transition={true}>
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Button variant='primary' type='submit' className='w-100'>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          New user? <Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
