/**
 * @file A custom React hook generating crypting text effect.
 * @author Roman Veselý <https://romanvesely.com>
 * @copyright https://github.com/crazko/use-dencrypt-effect
 */

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getChar = (i: number, j: number, maxLength: number, oldValue: string, newValue: string, chars: string[]) => {
  if (j > i) return oldValue[j]
  if (i >= maxLength && j < i - maxLength) return newValue[j]

  return chars[Math.floor(Math.random() * chars.length)]
}

const defaultOptions = {
  chars: ['-', '.', '/', '^', '*', '!', '}', '<', '~', '$', '0', '1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e', 'f'],
  interval: 50
}

export const useCypher = (initialValue = '', options?: Partial<typeof defaultOptions>) => {
  const [value, setValue] = useState(initialValue)
  const [result, setResult] = useState('')

  const { chars, interval } = { ...defaultOptions, ...options }

  useEffect(() => {
    let i = 0

    const crypting = setInterval(() => {
      setResult((oldValue) => {
        if (oldValue === value) {
          clearInterval(crypting)
          return value
        }

        const maxLength = Math.max(oldValue ? oldValue.length : 0, value.length)

        return [...new Array(maxLength)].map((_, j) => getChar(i, j, maxLength, oldValue, value, chars)).join('')
      })

      i++
    }, interval)

    return () => clearInterval(crypting)
  }, [value, chars, interval])

  return [result, setValue] as [string, Dispatch<SetStateAction<string>>]
}
