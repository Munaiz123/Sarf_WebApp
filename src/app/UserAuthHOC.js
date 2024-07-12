import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from './UserContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user } = useContext(UserContext);
    const router = useRouter()

    useEffect(() => {
      if (!user.loggedIn) {
        router.push('/login');
      }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
