import { Token } from './tokens'

const getOutput = (value: string, iValue: number, pattern?: RegExp): string => {
  const digits = value.slice(iValue, iValue + 2)

  if (digits.length === 2 && pattern?.test(digits)) {
    return digits
  }

  return value[iValue]
}

export const hour12Token: Token = {
  pattern: /[1-9]|1[0-2]/,
  validate (value, iValue): boolean {
    const hours = value.slice(iValue, iValue + 2)

    if (hours.length === 2) { return /1[0-2]/.test(hours) }

    return /[1-9]/.test(hours)
  },
  output (value, iValue): string {
    return getOutput(value, iValue, this.pattern)
  }
}

export const minutesToken: Token = {
  pattern: /[0-5][0-9]/,
  validate (value, iValue): boolean {
    const minutes = value.slice(iValue, iValue + 2)

    if (/[0-5]/.test(minutes[0]) && /[0-9]/.test(minutes[1])) {
      return Boolean(this.pattern?.test(minutes))
    }

    return /[0-5]/.test(value[iValue])
  },
  output (value, iValue): string {
    return getOutput(value, iValue, this.pattern)
  }
}