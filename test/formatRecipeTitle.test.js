import { describe, it, expect } from 'vitest'
import { formatRecipeTitle } from '../js/utils/formatRecipeTitle'

describe('formatRecipeTitle', () => {
  describe('correct capitalization', () => {
    it('should capitalize the first letter of each word', () => {
      expect(formatRecipeTitle('chocolate chip cookies')).toBe('Chocolate Chip Cookies')
      expect(formatRecipeTitle('beef stew recipe')).toBe('Beef Stew Recipe')
      expect(formatRecipeTitle('pasta with tomato sauce')).toBe('Pasta With Tomato Sauce')
    })

    it('should handle single word titles', () => {
      expect(formatRecipeTitle('pizza')).toBe('Pizza')
      expect(formatRecipeTitle('soup')).toBe('Soup')
      expect(formatRecipeTitle('bread')).toBe('Bread')
    })
  })

  describe('different case inputs', () => {
    it('should handle all lowercase input', () => {
      expect(formatRecipeTitle('chicken and rice')).toBe('Chicken And Rice')
      expect(formatRecipeTitle('banana bread')).toBe('Banana Bread')
      expect(formatRecipeTitle('vegetable soup')).toBe('Vegetable Soup')
    })

    it('should handle all uppercase input', () => {
      expect(formatRecipeTitle('CHOCOLATE CAKE')).toBe('Chocolate Cake')
      expect(formatRecipeTitle('FISH AND CHIPS')).toBe('Fish And Chips')
      expect(formatRecipeTitle('APPLE PIE')).toBe('Apple Pie')
    })

    it('should handle mixed case input', () => {
      expect(formatRecipeTitle('ChOcOlAtE cHiP cOoKiEs')).toBe('Chocolate Chip Cookies')
      expect(formatRecipeTitle('bEeF StEw ReCiPe')).toBe('Beef Stew Recipe')
      expect(formatRecipeTitle('PaStA wItH tOmAtO sAuCe')).toBe('Pasta With Tomato Sauce')
    })

    it('should handle titles with random capitalization', () => {
      expect(formatRecipeTitle('cHicken AND rice')).toBe('Chicken And Rice')
      expect(formatRecipeTitle('BANANA bread')).toBe('Banana Bread')
      expect(formatRecipeTitle('VeGeTaBlE SOUP')).toBe('Vegetable Soup')
    })
  })

  describe('empty or missing arguments', () => {
    it('should return empty string for empty string input', () => {
      expect(formatRecipeTitle('')).toBe('')
    })

    it('should return empty string for null input', () => {
      expect(formatRecipeTitle(null)).toBe('')
    })

    it('should return empty string for undefined input', () => {
      expect(formatRecipeTitle(undefined)).toBe('')
    })

    it('should return empty string when no argument is provided', () => {
      expect(formatRecipeTitle()).toBe('')
    })

    it('should return empty string for false input', () => {
      expect(formatRecipeTitle(false)).toBe('')
    })

    it('should return empty string for 0 input', () => {
      expect(formatRecipeTitle(0)).toBe('')
    })
  })

  describe('multiple spaces between words', () => {
    it('should handle double spaces between words', () => {
      expect(formatRecipeTitle('chocolate  chip  cookies')).toBe('Chocolate  Chip  Cookies')
    })

    it('should handle triple spaces between words', () => {
      expect(formatRecipeTitle('beef   stew   recipe')).toBe('Beef   Stew   Recipe')
    })

    it('should handle mixed spacing', () => {
      expect(formatRecipeTitle('pasta  with   tomato    sauce')).toBe('Pasta  With   Tomato    Sauce')
    })

    it('should handle leading and trailing spaces with multiple internal spaces', () => {
      expect(formatRecipeTitle('  chicken   and   rice  ')).toBe('  Chicken   And   Rice  ')
    })

    it('should handle tabs as part of words (current behavior)', () => {
      expect(formatRecipeTitle('chicken\tand\trice')).toBe('Chicken\tand\trice')
    })
  })

  describe('edge cases', () => {
    it('should handle single character words', () => {
      expect(formatRecipeTitle('a b c')).toBe('A B C')
      expect(formatRecipeTitle('i love u')).toBe('I Love U')
    })

    it('should handle words with numbers', () => {
      expect(formatRecipeTitle('recipe123 for dinner')).toBe('Recipe123 For Dinner')
      expect(formatRecipeTitle('5minute pasta')).toBe('5minute Pasta')
    })

    it('should handle special characters', () => {
      expect(formatRecipeTitle('mom\'s apple pie')).toBe('Mom\'s Apple Pie')
      expect(formatRecipeTitle('fish & chips')).toBe('Fish & Chips')
      expect(formatRecipeTitle('spanish-style rice')).toBe('Spanish-style Rice')
    })

    it('should handle only spaces', () => {
      expect(formatRecipeTitle('   ')).toBe('   ')
      expect(formatRecipeTitle(' ')).toBe(' ')
    })
  })
})