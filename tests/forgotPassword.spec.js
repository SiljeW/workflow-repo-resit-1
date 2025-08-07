import { test, expect } from '@playwright/test';

test.describe('Forgot Password Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('/login/');
    
    // Verify we're on the login page
    await expect(page).toHaveTitle('Login | Resit Recipes');
    
    // Click on the "Forgot Password?" link
    await page.click('a[href="/forgot-password"]');
    
    // Verify we're on the forgot password page
    await expect(page).toHaveURL('/forgot-password');
    await expect(page).toHaveTitle('Forgot Password | Resit Recipes');
  });

  test('should show success message for valid email', async ({ page }) => {
    // Enter the valid email using the name attribute
    await page.fill('input[name="email"]', 'workflow@noroff.no');
    
    // Submit the form by clicking the "Reset Password" button
    await page.click('button[type="submit"]');
    
    // Wait for and verify success message appears in the message container
    await expect(page.locator('#message-container')).toContainText('Password reset instructions have been sent to your email.');
  });

  test('should show error message for non-existent email', async ({ page }) => {
    // Enter non-existent email
    await page.fill('input[name="email"]', 'nonexistent@noroff.no');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Wait for and verify error message appears in the message container
    await expect(page.locator('#message-container')).toContainText('No account found with that email address');
  });

  test('should show validation error for empty email', async ({ page }) => {
    // Ensure email field is empty
    await page.fill('input[name="email"]', '');
    
    // Try to submit the form
    await page.click('button[type="submit"]');
    
    // Your app shows domain validation message even for empty email
    await expect(page.locator('#message-container')).toContainText('Please enter a valid noroff.no or stud.noroff.no email address.');
  });

  test('should show validation error for invalid email format', async ({ page }) => {
    // Enter invalid email format
    await page.fill('input[name="email"]', 'invalid-email');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Your app requires specific domains
    await expect(page.locator('#message-container')).toContainText('Please enter a valid noroff.no or stud.noroff.no email address.');
  });
});

test.describe('Forgot Password Navigation', () => {
  test('should navigate from login page to forgot password page', async ({ page }) => {
    // Start at login page
    await page.goto('/login');
    
    // Verify we're on login page
    await expect(page).toHaveTitle('Login | Resit Recipes');
    await expect(page.locator('h1')).toHaveText('Login');
    
    // Click forgot password link
    await page.click('a[href="/forgot-password"]');
    
    // Verify navigation to forgot password page
    await expect(page).toHaveURL('/forgot-password');
    await expect(page).toHaveTitle('Forgot Password | Resit Recipes');
    await expect(page.locator('h1')).toHaveText('Forgot Password');
    
    // Verify forgot password form is present
    await expect(page.locator('#forgotPasswordForm')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Reset Password');
  });
});

// Additional test for form behavior and navigation
test.describe('Forgot Password Form Behavior', () => {
  test('should have proper form elements and accessibility', async ({ page }) => {
    await page.goto('/login');
    await page.click('a[href="/forgot-password"]');
    
    // Check form structure
    await expect(page.locator('#forgotPasswordForm')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toHaveAttribute('type', 'email');
    await expect(page.locator('input[name="email"]')).toHaveAttribute('required');
    await expect(page.locator('input[name="email"]')).toHaveAttribute('placeholder', 'Email');
    
    // Check instructions text
    await expect(page.locator('p')).toContainText('Enter your email address and we\'ll send you a link to reset your password.');
  });

  test('should allow going back to login page', async ({ page }) => {
    await page.goto('/login');
    await page.click('a[href="/forgot-password"]');
    
    // Verify we're on forgot password page
    await expect(page).toHaveTitle('Forgot Password | Resit Recipes');
    
    // Look for back to login link and click it
    await page.click('a[href="/login"]');
    
    // Verify we're back on login page
    await expect(page).toHaveURL('/login');
    await expect(page).toHaveTitle('Login | Resit Recipes');
    await expect(page.locator('h1')).toHaveText('Login');
  });

  test('should clear form when navigating back from login', async ({ page }) => {
    await page.goto('/login');
    await page.click('a[href="/forgot-password"]');
    
    // Fill in email
    await page.fill('input[name="email"]', 'test@example.com');
    
    // Navigate back to login
    await page.click('a[href="/login"]');
    
    // Navigate back to forgot password
    await page.click('a[href="/forgot-password"]');
    
    // Check if form is cleared (this behavior may vary)
    const emailValue = await page.locator('input[name="email"]').inputValue();
    expect(emailValue).toBe('');
  });
});