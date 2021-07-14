import React, { useState, useRef } from 'react';
import { Card, Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const { signup, signInWithGoogle } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError('Failed to create an account!');
    }
    setLoading(false);
  };

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
      history.push('/dashboard');
    } catch (error) {
      setError('Google sign in failed!');
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
            <h2 className='text-center mb-4'>Signup</h2>
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

              <Form.Group className='mb-3' controlId='confirm-password'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm Password'
                  ref={confirmPasswordRef}
                  required
                />
              </Form.Group>

              <Button
                disabled={loading}
                variant='primary'
                type='submit'
                className='w-100'
              >
                Signup
              </Button>

              <Button
                disabled={loading}
                variant='danger'
                className='w-100 mt-3'
                onClick={googleSignIn}
              >
                Sign up with Google
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
