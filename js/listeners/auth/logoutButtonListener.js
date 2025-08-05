import { clearStorage } from '../../utils/storage.js';

export function logoutButtonListener() {
  const logoutButton = document.querySelector('#logoutButton');

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      clearStorage();
      window.location.href = '/login';
    });
  }
}
