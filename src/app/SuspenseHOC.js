import { Suspense } from 'react';

export default function withSuspense(WrappedComponent) {
  return function SuspenseWrapper(props) {
    return (
      <Suspense fallback={<div className='animate-pulse'>Loading...</div>}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}