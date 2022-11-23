import type BigNumber from 'bignumber.js'
import { valueToZDBigNumber } from '@vinci-protocol/math'
import type { BigNumberValue } from '@vinci-protocol/math'
import { SECONDS_PER_YEAR } from '@vinci-protocol/math'
import { binomialApproximatedRayPow } from '@vinci-protocol/math'

export interface CalculateCompoundedInterestRequest {
  rate: BigNumberValue
  currentTimestamp: number
  lastUpdateTimestamp: number
}

export function calculateCompoundedInterest({
  rate,
  currentTimestamp,
  lastUpdateTimestamp,
}: CalculateCompoundedInterestRequest): BigNumber {
  const timeDelta = valueToZDBigNumber(currentTimestamp - lastUpdateTimestamp)
  const ratePerSecond = valueToZDBigNumber(rate).dividedBy(SECONDS_PER_YEAR)
  return binomialApproximatedRayPow(ratePerSecond, timeDelta)
}
