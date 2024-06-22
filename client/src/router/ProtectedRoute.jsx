import { Outlet, Navigate } from 'react-router-dom';

// eslint-disable-next-line no-empty-pattern
export default function ProtectedRoute({ }) {
  console.log({ accessToken: localStorage.getItem('accessToken') });
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
}
