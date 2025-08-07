# Workflow Resit 1 Repo

A recipe management application built with HTML, CSS (Tailwind), and JavaScript, featuring comprehensive testing with Vitest (unit tests) and Playwright (e2e tests).

## Project Overview

This project is a recipe application that includes user authentication, forgot password functionality, and various utility functions for recipe management. The application uses domain-restricted email validation for Noroff users.

## Tech Stack

- **Frontend**: HTML5, CSS (Tailwind CSS), Vanilla JavaScript
- **Development Tools**:
  - ESlint and Prettier
  - Husky commit hooks
- **Testing**: 
  - Unit Testing: Vitest with jsdom
  - E2E Testing: Playwright

## 🧪 Testing Setup

### Unit Tests (Vitest)

The project includes comprehensive unit tests for utility functions:

#### Functions Tested:
- **`calculateTotalCookingTime`**: Calculates total cooking time from prep and cook times
- **`formatRecipeTitle`**: Formats recipe titles with proper capitalization
- **`createTitle`**: Creates page titles with site branding

#### Test Coverage:
- ✅ Positive number calculations
- ✅ Zero value handling
- ✅ Negative value handling (treated as zero)
- ✅ Non-numeric input validation
- ✅ Missing argument handling
- ✅ String case transformations
- ✅ Empty/null input handling
- ✅ Whitespace handling

### E2E Tests (Playwright)

End-to-end tests cover the complete forgot password user flow:

#### Test Scenarios:
- ✅ Navigation from login to forgot password page
- ✅ Success scenario with valid email (`workflow@noroff.no`)
- ✅ Error scenario with non-existent email
- ✅ Email domain validation (requires @noroff.no or @stud.noroff.no)
- ✅ Form accessibility and structure validation
- ✅ Navigation back to login page

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd workflow-repo-resit-1
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Playwright browsers** (for e2e tests)
```bash
npx playwright install
```

### Development

1. **Start development server**
```bash
npm start
# This runs both Tailwind CSS watch mode and serves the application
```

2. **Access the application**
- Main site: `http://localhost:3000`
- Login page: `http://localhost:3000/login`
- Forgot Password: `http://localhost:3000/forgot-password`

## Running Tests

### Unit Tests
```bash
# Run unit tests
npm test

```

### E2E Tests
```bash
# Run e2e tests
npm run test:e2e
```


## Configuration Files

### Vitest Configuration (`vitest.config.js`)
- Environment: jsdom (for DOM testing)
- Global test functions enabled
- Setup files for test utilities

### Playwright Configuration (`playwright.config.js`)
- Base URL: `http://localhost:3000`
- Multiple browsers: Chromium, Firefox, WebKit
- Automatic dev server startup
- HTML reporter for test results


## Email Validation Rules

The application enforces strict email validation:
- ✅ Valid: `user@noroff.no`
- ✅ Valid: `student@stud.noroff.no` 
- ❌ Invalid: `user@gmail.com`
- ❌ Invalid: `user@other-domain.com`

Error message: *"Please enter a valid noroff.no or stud.noroff.no email address."*


## Project Status

- ✅ Unit tests: All passing (17/17)
- ✅ E2E tests: All passing (30/30)
- ✅ Email validation: Implemented and tested
- ✅ Forgot password flow: Complete and tested
- ✅ Utility functions: Fully tested with edge cases
