import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const SignInPage: React.FC = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        user ? (
          <div>
            <h1>Welcome, {}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <div>Please sign in</div>
        )
      )}
    </Authenticator>
  );
};

export default SignInPage;
