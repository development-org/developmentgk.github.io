import React, { useState, useRef } from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState('');

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
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
            <h2 className='text-center mb-4'>Signup</h2>
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

              <Form.Group className='mb-3' controlId='confirm-password'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm Password'
                  ref={confirmPasswordRef}
                  required
                />
              </Form.Group>

              <Button variant='primary' type='submit' className='w-100'>
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
