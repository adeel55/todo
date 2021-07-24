import React, { useState } from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useScriptRef from '../../../hooks/useScriptRef';

const Auth0Login = ({ className, ...rest }) => {

  const { popupLogin } = useAuth();
  const [error, setError] = useState(null);
  const scriptedRef = useScriptRef();

  const loginHandler = async () => {
    try {
      await popupLogin();
    } catch (err) {
      if (scriptedRef.current) {
        setError(err.message);
      }
    }
  };

  return (
      <React.Fragment>
          <div className={className} {...rest}>
            <Row>
              {error && ( 
                <Col sm={12}>
                    <Alert variant='danger'>{error}</Alert>
                </Col>
              )}
              <Col sm={12}>
                <Button onClick={loginHandler} variant="primary" className='btn-block mb-4'>
                  <i className='fa fa-lock' /> Log in with Auth0
                </Button>
              </Col>
            </Row>
          </div>
      </React.Fragment>
  );
};

export default Auth0Login;
