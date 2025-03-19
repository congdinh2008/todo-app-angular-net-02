import { CanActivateFn } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  // Check if the user is authenticated
  const accessToken = localStorage.getItem('accessToken');
  // If the user is authenticated, redirect to the home page
  if (accessToken) {
    return true;
  }

  return false;
};
