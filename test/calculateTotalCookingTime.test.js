import { describe, it, expect } from 'vitest'
import { calculateTotalCookingTime } from '../js/utils/calculateTotalCookingTime'


describe('calculateTotalCookingTime', () => {
  describe('positive numbers', () => {
    it('should correctly add two positive numbers', () => {
      expect(calculateTotalCookingTime(15, 30)).toBe(45)
      expect(calculateTotalCookingTime(10, 20)).toBe(30)
      expect(calculateTotalCookingTime(5, 5)).toBe(10)
    })

    it('should handle decimal numbers', () => {
      expect(calculateTotalCookingTime(15.5, 30.5)).toBe(46)
      expect(calculateTotalCookingTime(10.25, 20.75)).toBe(31)
    })
  })

  describe('zero values', () => {
    it('should handle when prep time is zero', () => {
      expect(calculateTotalCookingTime(0, 30)).toBe(30)
    })

    it('should handle when cook time is zero', () => {
      expect(calculateTotalCookingTime(15, 0)).toBe(15)
    })

    it('should handle when both times are zero', () => {
      expect(calculateTotalCookingTime(0, 0)).toBe(0)
    })
  })

  describe('negative values', () => {
    it('should treat negative prep time as zero', () => {
      expect(calculateTotalCookingTime(-10, 30)).toBe(30)
      expect(calculateTotalCookingTime(-5, 25)).toBe(25)
    })

    it('should treat negative cook time as zero', () => {
      expect(calculateTotalCookingTime(15, -10)).toBe(15)
      expect(calculateTotalCookingTime(20, -5)).toBe(20)
    })

    it('should treat both negative values as zero', () => {
      expect(calculateTotalCookingTime(-10, -20)).toBe(0)
      expect(calculateTotalCookingTime(-5, -15)).toBe(0)
    })

    it('should handle mixed positive and negative values', () => {
      expect(calculateTotalCookingTime(-10, 30)).toBe(30)
      expect(calculateTotalCookingTime(15, -5)).toBe(15)
    })
  })

  describe('non-numeric inputs', () => {
    it('should return 0 for string inputs', () => {
      expect(calculateTotalCookingTime('15', 30)).toBe(0)
      expect(calculateTotalCookingTime(15, '30')).toBe(0)
      expect(calculateTotalCookingTime('15', '30')).toBe(0)
      expect(calculateTotalCookingTime('abc', 'def')).toBe(0)
    })

    it('should return 0 for null inputs', () => {
      expect(calculateTotalCookingTime(null, 30)).toBe(0)
      expect(calculateTotalCookingTime(15, null)).toBe(0)
      expect(calculateTotalCookingTime(null, null)).toBe(0)
    })

    it('should return 0 for undefined inputs', () => {
      expect(calculateTotalCookingTime(undefined, 30)).toBe(0)
      expect(calculateTotalCookingTime(15, undefined)).toBe(0)
      expect(calculateTotalCookingTime(undefined, undefined)).toBe(0)
    })

    it('should return 0 for boolean inputs', () => {
      expect(calculateTotalCookingTime(true, 30)).toBe(0)
      expect(calculateTotalCookingTime(15, false)).toBe(0)
      expect(calculateTotalCookingTime(true, false)).toBe(0)
    })

    it('should return 0 for object inputs', () => {
      expect(calculateTotalCookingTime({}, 30)).toBe(0)
      expect(calculateTotalCookingTime(15, [])).toBe(0)
      expect(calculateTotalCookingTime({}, [])).toBe(0)
    })
  })

  describe('missing arguments', () => {
    it('should return 0 when first argument is missing', () => {
      expect(calculateTotalCookingTime(undefined, 30)).toBe(0)
    })

    it('should return 0 when second argument is missing', () => {
      expect(calculateTotalCookingTime(15, undefined)).toBe(0)
    })

    it('should return 0 when both arguments are missing', () => {
      expect(calculateTotalCookingTime()).toBe(0)
    })
  })
})