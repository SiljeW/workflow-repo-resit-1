# Resit Recipes - Mock API Implementation

This project includes a simple mock API implementation to ensure the website continues to function even if the external API becomes unavailable.

## How It Works

The mock API system works by:

1. Using a configuration flag to determine whether to use the real API or mock data
2. Creating mock Response objects that show up in the browser's network tab
3. Storing user data in localStorage to persist between sessions

## Files Overview

- `js/config.js` - Contains configuration settings, including the `useMockApi` flag
- `js/mockApi.js` - Contains mock data and a simple mock server implementation
- `js/apiService.js` - Service that handles all API calls, using either real or mock API
- `js/auth.js` - Authentication helper functions for login, register, etc.

## How to Use

### Toggle Between Real and Mock API

To switch between the real API and mock API, edit the `js/config.js` file:

```javascript
export const CONFIG = {
  siteTitle: "Resit Recipes",
  apiUrl: "https://api.noroff.dev/api/v1/recipes/",
  useMockApi: true, // Set to false to use the real API
};
```

### Making API Calls

Always use the `apiService` functions to make API calls:

```javascript
import { apiService } from "./apiService.js";

// Example: Get recipes
apiService
  .getRecipes()
  .then((recipes) => {
    console.log(recipes);
    // Process recipes data
  })
  .catch((error) => {
    console.error("Error fetching recipes:", error);
  });
```

### Authentication

Use the authentication helper functions for login and registration:

```javascript
import {
  handleLogin,
  handleRegister,
  isLoggedIn,
  getCurrentUser,
  logout,
} from "./auth.js";

// Login
handleLogin("user@example.com", "password").then((result) => {
  if (result.success) {
    console.log("Logged in successfully:", result.user);
  } else {
    console.error("Login failed:", result.message);
  }
});

// Register
handleRegister("User Name", "user@example.com", "password").then((result) => {
  if (result.success) {
    console.log("Registered successfully:", result.user);
  } else {
    console.error("Registration failed:", result.message);
  }
});
```

## Mock Data

The mock data includes:

- Recipes with title, description, image, and tags
- Users with name, email, and token

You can modify the mock data in `js/mockApi.js` to suit your needs.

## Random Recipe Images

The project includes utilities for generating random recipe images using Picsum Photos:

### Basic Usage

```javascript
import { getRandomFoodImage } from "./js/imageUtils.js";

// Get a random food image (800x600 pixels)
const imageUrl = getRandomFoodImage();

// Get a random food image with custom dimensions
const customImageUrl = getRandomFoodImage(400, 300);
```

### Category-Specific Images

```javascript
import { getCategoryImage } from "./js/imageUtils.js";

// Get an image appropriate for a dessert
const dessertImageUrl = getCategoryImage("dessert");

// Get an image appropriate for a drink
const drinkImageUrl = getCategoryImage("drink");

// Get a general food image for other categories
const mainCourseImageUrl = getCategoryImage("main");
```

## Demo Accounts

The mock API includes two demo accounts:

1. Regular User:

   - Email: demo@example.com
   - Password: (any password will work with the mock API)

2. Admin User:
   - Email: admin@example.com
   - Password: (any password will work with the mock API)

## Adding More Endpoints

To add more endpoints to the mock API, add a new route to the mockServer in `js/mockApi.js`:

```javascript
mockServer.route("METHOD", "path", (body, params) => {
  // Handle the request
  return {
    status: 200,
    body: {
      /* response data */
    },
  };
});
```
