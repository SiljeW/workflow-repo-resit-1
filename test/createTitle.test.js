import { describe, it, expect } from 'vitest'
import { createTitle, CONFIG } from '../js/utils/createTitle'


describe('createTitle', () => {
  describe('removes extra spaces', () => {
    it('should remove leading spaces', () => {
      expect(createTitle('   Home Page')).toBe('Home Page | Resit Recipes')
      expect(createTitle(' About Us')).toBe('About Us | Resit Recipes')
    })

    it('should remove trailing spaces', () => {
      expect(createTitle('Home Page   ')).toBe('Home Page | Resit Recipes')
      expect(createTitle('About Us ')).toBe('About Us | Resit Recipes')
    })

    it('should remove both leading and trailing spaces', () => {
      expect(createTitle('  Home Page  ')).toBe('Home Page | Resit Recipes')
      expect(createTitle('   About Us   ')).toBe('About Us | Resit Recipes')
    })

    it('should preserve internal spaces', () => {
      expect(createTitle('  Home Page Content  ')).toBe('Home Page Content | Resit Recipes')
      expect(createTitle('   Recipe  Collection   ')).toBe('Recipe  Collection | Resit Recipes')
    })

    it('should handle tabs and newlines', () => {
      expect(createTitle('\tHome Page\t')).toBe('Home Page | Resit Recipes')
      expect(createTitle('\nAbout Us\n')).toBe('About Us | Resit Recipes')
      expect(createTitle(' \t Home Page \n ')).toBe('Home Page | Resit Recipes')
    })
  })

  describe('different case inputs', () => {
    it('should handle all lowercase input', () => {
      expect(createTitle('home page')).toBe('home page | Resit Recipes')
      expect(createTitle('about us')).toBe('about us | Resit Recipes')
      expect(createTitle('recipe collection')).toBe('recipe collection | Resit Recipes')
    })

    it('should handle all uppercase input', () => {
      expect(createTitle('HOME PAGE')).toBe('HOME PAGE | Resit Recipes')
      expect(createTitle('ABOUT US')).toBe('ABOUT US | Resit Recipes')
      expect(createTitle('RECIPE COLLECTION')).toBe('RECIPE COLLECTION | Resit Recipes')
    })

    it('should handle mixed case input', () => {
      expect(createTitle('HoMe PaGe')).toBe('HoMe PaGe | Resit Recipes')
      expect(createTitle('AbOuT uS')).toBe('AbOuT uS | Resit Recipes')
      expect(createTitle('ReCiPe CoLlEcTiOn')).toBe('ReCiPe CoLlEcTiOn | Resit Recipes')
    })

    it('should handle proper case input', () => {
      expect(createTitle('Home Page')).toBe('Home Page | Resit Recipes')
      expect(createTitle('About Us')).toBe('About Us | Resit Recipes')
      expect(createTitle('Recipe Collection')).toBe('Recipe Collection | Resit Recipes')
    })
  })

  describe('empty or missing arguments', () => {
    it('should return site title for empty string', () => {
      expect(createTitle('')).toBe('Resit Recipes')
    })

    it('should return site title for null', () => {
      expect(createTitle(null)).toBe('Resit Recipes')
    })

    it('should return site title for undefined', () => {
      expect(createTitle(undefined)).toBe('Resit Recipes')
    })

    it('should return site title when no argument is provided', () => {
      expect(createTitle()).toBe('Resit Recipes')
    })

    it('should return site title for false', () => {
      expect(createTitle(false)).toBe('Resit Recipes')
    })

    it('should return site title for 0', () => {
      expect(createTitle(0)).toBe('Resit Recipes')
    })

    it('should return site title for non-string types', () => {
      expect(createTitle(123)).toBe('Resit Recipes')
      expect(createTitle({})).toBe('Resit Recipes')
      expect(createTitle([])).toBe('Resit Recipes')
      expect(createTitle(true)).toBe('Resit Recipes')
    })
  })

  describe('whitespace-only inputs', () => {
    it('should return site title for string with only spaces', () => {
      expect(createTitle('   ')).toBe('Resit Recipes')
      expect(createTitle(' ')).toBe('Resit Recipes')
      expect(createTitle('          ')).toBe('Resit Recipes')
    })

    it('should return site title for string with only tabs', () => {
      expect(createTitle('\t')).toBe('Resit Recipes')
      expect(createTitle('\t\t\t')).toBe('Resit Recipes')
    })

    it('should return site title for string with only newlines', () => {
      expect(createTitle('\n')).toBe('Resit Recipes')
      expect(createTitle('\n\n\n')).toBe('Resit Recipes')
    })

    it('should return site title for mixed whitespace', () => {
      expect(createTitle(' \t \n ')).toBe('Resit Recipes')
      expect(createTitle('\t\n\r\f\v ')).toBe('Resit Recipes')
    })
  })

  describe('normal functionality', () => {
    it('should create proper formatted title with valid input', () => {
      expect(createTitle('Home')).toBe('Home | Resit Recipes')
      expect(createTitle('About')).toBe('About | Resit Recipes')
      expect(createTitle('Contact Us')).toBe('Contact Us | Resit Recipes')
    })

    it('should handle long titles', () => {
      const longTitle = 'This is a very long page title that should still work correctly'
      expect(createTitle(longTitle)).toBe(`${longTitle} | Resit Recipes`)
    })

    it('should handle special characters in titles', () => {
      expect(createTitle('Mom\'s Recipes')).toBe('Mom\'s Recipes | Resit Recipes')
      expect(createTitle('Fish & Chips')).toBe('Fish & Chips | Resit Recipes')
      expect(createTitle('Recipe #1')).toBe('Recipe #1 | Resit Recipes')
      expect(createTitle('Spanish-Style Rice')).toBe('Spanish-Style Rice | Resit Recipes')
    })

    it('should handle titles with numbers', () => {
      expect(createTitle('Recipe 123')).toBe('Recipe 123 | Resit Recipes')
      expect(createTitle('Top 10 Recipes')).toBe('Top 10 Recipes | Resit Recipes')
      expect(createTitle('2024 Recipe Collection')).toBe('2024 Recipe Collection | Resit Recipes')
    })
  })
})

