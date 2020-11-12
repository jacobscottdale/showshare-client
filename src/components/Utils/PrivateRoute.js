import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from 'services/token-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  console.log('hi')
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasValidAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: componentProps.location }
            }}
          />
      )}
    />
  );
}