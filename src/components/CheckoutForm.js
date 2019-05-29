import React from 'react';

import { Grid, Fab } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import valid from 'card-validator';
import { API_URL } from '../constants/api';

const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Required'),
  cardNumber: Yup.string()
    .test(
      'test-number', // this is used internally by yup
      'Credit Card number is invalid', //validation message
      value => valid.number(value).isValid
    ) // return true false based on validation
    .required(),
  cvv: Yup.string()
    .test('test-cvv', 'CVV is invalid', value => valid.cvv(value).isValid)
    .required('Required'),
  cardExpiration: Yup.string()
    .test(
      'test-card-expiration',
      'Expiration is invalid',
      value => valid.expirationDate(value).isValid
    )
    .required('Required'),
});

const CheckoutForm = props => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={CheckoutSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch(API_URL + '/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(res => res.json())
          .then(res => alert(JSON.stringify(res)));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Field
                type="text"
                name="firstName"
                component={TextField}
                variant="outlined"
                label="First name"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                type="text"
                name="lastName"
                component={TextField}
                variant="outlined"
                label="Last name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                type="email"
                name="email"
                component={TextField}
                variant="outlined"
                label="Email"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <br />
            </Grid>

            <Grid item xs={12}>
              <Field
                type="text"
                name="cardNumber"
                component={TextField}
                variant="outlined"
                label="Card number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                type="text"
                name="cvv"
                component={TextField}
                variant="outlined"
                label="CVV"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                type="text"
                name="cardExpiration"
                component={TextField}
                variant="outlined"
                label="Expiration"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <br />
            </Grid>

            <Grid item xs={12}>
              <Fab
                type="submit"
                variant="extended"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Fab>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
