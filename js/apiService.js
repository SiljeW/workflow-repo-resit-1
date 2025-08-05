// Food-like image IDs from Picsum Photos
const _foodImageIds = [292, 429, 488, 614, 835, 1060, 1080, 1065, 1079, 1084]; // Will be used later

export const mockData = {
  recipes: [
    {
      id: 1,
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and bacon',
      image: 'https://picsum.photos/id/292/400/600',
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'Spicy chicken curry with coconut milk and vegetables',
      image: 'https://picsum.photos/id/429/400/600',
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake with ganache frosting',
      image: 'https://picsum.photos/id/488/400/600',
    },
    {
      id: 4,
      name: 'Salad',
      description: 'Fresh and healthy salad with vegetables and dressing',
      image: 'https://picsum.photos/id/614/400/600',
    },
    {
      id: 5,
      name: 'Pizza',
      description: 'Delicious pizza with cheese and toppings',
      image: 'https://picsum.photos/id/1060/400/600',
    },
    {
      id: 6,
      name: 'Sushi',
      description: 'Fresh sushi with fish and vegetables',
      image: 'https://picsum.photos/id/1080/400/600',
    },
    {
      id: 7,
      name: 'Burger',
      description: 'Juicy burger with beef patty, cheese, and vegetables',
      image: 'https://picsum.photos/id/1065/400/600',
    },
    {
      id: 8,
      name: 'Tacos',
      description: 'Mexican tacos with beef, cheese, and vegetables',
      image: 'https://picsum.photos/id/1079/400/600',
    },
    {
      id: 9,
      name: 'Pad Thai',
      description: 'Thai pad thai with noodles, vegetables, and peanuts',
      image: 'https://picsum.photos/id/1084/400/600',
    },
  ],
  users: [
    {
      id: 1,
      name: 'Test User',
      email: 'workflow@noroff.no',
      password: '123456',
      token: 'mock-token-12345',
    },
  ],
};

export const apiService = {
  login: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(
          u => u.email === email.trim().toLowerCase() && u.password === password
        );

        if (user) {
          resolve({
            data: {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: user.token,
            },
            status: 200,
            statusText: 'OK',
          });
        } else {
          reject({
            error: 'Invalid email or password',
            status: 401,
            statusText: 'Unauthorized',
          });
        }
      }, 500); // Simulate network delay
    });
  },

  forgotPassword: ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(
          u => u.email === email.trim().toLowerCase()
        );

        if (user) {
          // In a real app, this would send an email with a reset link
          // For this mock, we'll just simulate a successful response
          resolve({
            data: {
              message: 'Password reset email sent',
            },
            status: 200,
            statusText: 'OK',
          });
        } else {
          reject({
            error: 'No account found with that email address',
            status: 404,
            statusText: 'Not Found',
          });
        }
      }, 1000);
    });
  },

  // Register function
  register: ({ name, email, _password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(u => u.email === email);

        if (user) {
          reject({
            error: 'Email already registered',
            status: 409,
            statusText: 'Conflict',
          });
          return;
        }

        // Create new user
        const newUser = {
          id: mockData.users.length + 1,
          name,
          email,
          token: 'mock-token-' + Math.floor(Math.random() * 100000),
        };

        resolve({
          data: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          },
          status: 201,
          statusText: 'Created',
        });
      }, 800); // Simulate network delay
    });
  },

  // Get recipes
  getRecipes: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: mockData.recipes,
          status: 200,
          statusText: 'OK',
        });
      }, 500);
    });
  },

  // Get recipe by ID
  getRecipeById: id => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recipe = mockData.recipes.find(r => r.id === parseInt(id));
        if (recipe) {
          resolve({
            data: recipe,
            status: 200,
            statusText: 'OK',
          });
        } else {
          reject({
            error: 'Recipe not found',
            status: 404,
            statusText: 'Not Found',
          });
        }
      }, 500);
    });
  },
};
