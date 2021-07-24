import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import useScriptRef from '../../../hooks/useScriptRef';

const JWTLogin = ({ className, ...rest }) => {
  const { login } = useAuth();
  const scriptedRef = useScriptRef();

  return (
      <Formik
          initialValues={{
            email: 'adeel5@gmail.com',
            password: '12345',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={async (values, {
            setErrors,
            setStatus,
            setSubmitting
          }) => {
            try {
              await login(values.email, values.password);

              if (scriptedRef.current) {
                setStatus({ success: true });
                setSubmitting(false);
              }
            } catch (err) {
              console.error(err);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
      >
        {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form
                noValidate
                onSubmit={handleSubmit}
                className={className}
                {...rest}
            >
              <div className="form-group mb-3">
              <input
                className="form-control"
                error={touched.email && errors.email}
                label="Email Address / Username"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              {touched.email && errors.email && (                 
                <small class="text-danger form-text">{errors.email}</small>
              )}
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                error={touched.password && errors.password}
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
              />
              {touched.password && errors.password && (                 
                <small class="text-danger form-text">{errors.password}</small>
              )}
            </div>

            <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">Save credentials.</label>
            </div>
            
            {errors.submit && ( 
              <Col sm={12}>
                  <Alert>{errors.submit}</Alert>
              </Col>
            )}

            <Row>
              <Col mt={2}>
                <Button
                  className="btn-block mb-4"
                  color="primary"
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="primary"
                >
                  Signin
                </Button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
  );
};

export default JWTLogin;