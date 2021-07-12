import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const Dashboard = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await logout();
    history.push('/');
  };

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100 box-sm'>
        <Card>
          <Card.Body className='text-center'>
            <h2 className='mb-4'>Dashboard</h2>
            {currentUser && <p>{currentUser.email}</p>}
            <p>🚧 Work in progress 👨‍🔧</p>
          </Card.Body>
        </Card>
        <Button className='w-100 text-center mt-2' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
