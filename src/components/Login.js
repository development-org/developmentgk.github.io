import React, { useState, useRef } from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log({ email, password });
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
