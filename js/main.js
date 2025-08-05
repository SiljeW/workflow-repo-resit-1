import { createMenu } from '../js/ui/common/createMenu.js';
import { registerFormListener } from '../js/listeners/auth/registerFormListener.js';
import { loginFormListener } from '../js/listeners/auth/loginFormListener.js';
import { forgotPasswordFormListener } from '../js/listeners/auth/forgotPasswordFormListener.js';
import { logoutButtonListener } from './listeners/auth/logoutButtonListener.js';
import { displayRecipeList } from './listeners/recipes/displayRecipeList.js';
import { displayRecipe } from './listeners/recipes/displayRecipe.js';

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;
  //console.log(path);

  if (path === '/' || path === '/index.html') {
    displayRecipeList();
  } else if (path.startsWith('/login')) {
    loginFormListener();
  } else if (path.startsWith('/register')) {
    registerFormListener();
  } else if (path.startsWith('/forgot-password')) {
    forgotPasswordFormListener();
  } else if (path.startsWith('/recipe/')) {
    displayRecipe();
  }
}

initializeApp();
