import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
          />
        </div>
      </div>
      
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
          />
        </div>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm);
