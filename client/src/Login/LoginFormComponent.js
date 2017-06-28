import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const formDefaultValues =   { username: "", password: "" };
const renderField = ({ input, label, type,required, placeholder, className,  meta: { touched, error } }) => (
        <div className="form-group">
            <input {...input} placeholder={placeholder} type={type} className={className}/>
            <div className="clear form-error">{touched && error && <span>{error}</span>}</div>
        </div>

);

const LoginFormComponent = (props) => {
  const { handleSubmit, submitting, disableButton } = props;
  return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label=""
                    placeholder="Name"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <Field
                    name="password"
                    type="password"
                    component={renderField}
                    label=""
                    placeholder="Password"
                    className="form-control"
                    />
                </div>
                <div className="form-group text-center">
                    <a href="#">Need a new Password?</a>
                </div>
                <div className="form-group text-center">
                    <button
                     type="submit"
                     disabled={disableButton || submitting }
                     className="tasksubmit"
                     >
                     Get Started
                     </button>
                </div>
    </form>
  )
}

export default reduxForm({
  form: 'addLoginValidation'
})(LoginFormComponent);
