import BigNumber from 'bignumber.js'
import type { BigNumberValue } from '@vinci-protocol/math'
import { valueToBigNumber, valueToZDBigNumber } from '@vinci-protocol/math'
import { SECONDS_PER_YEAR, LTV_PRECISION } from '@vinci-protocol/math'
import * as RayMath from '@vinci-protocol/math'

interface CalculateCompoundedInterestRequest {
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
  return RayMath.binomialApproximatedRayPow(ratePerSecond, timeDelta)
}

interface CompoundedBalanceRequest {
  principalBalance: BigNumberValue
  reserveIndex: BigNumberValue
  reserveRate: BigNumberValue
  lastUpdateTimestamp: number
  currentTimestamp: number
}

export function getCompoundedBalance({
  principalBalance: _principalBalance,
  reserveIndex,
  reserveRate,
  lastUpdateTimestamp,
  currentTimestamp,
}: CompoundedBalanceRequest): BigNumber {
  const principalBalance = valueToZDBigNumber(_principalBalance)
  if (principalBalance.eq('0')) {
    return principalBalance
  }

  const compoundedInterest = calculateCompoundedInterest({
    rate: reserveRate,
    currentTimestamp,
    lastUpdateTimestamp,
  })
  const cumulatedInterest = RayMath.rayMul(compoundedInterest, reserveIndex)
  const principalBalanceRay = RayMath.wadToRay(principalBalance)

  return RayMath.rayToWad(RayMath.rayMul(principalBalanceRay, cumulatedInterest))
}

interface LinearInterestRequest {
  rate: BigNumberValue
  currentTimestamp: number
  lastUpdateTimestamp: number
}

export function calculateLinearInterest({
  rate,
  currentTimestamp,
  lastUpdateTimestamp,
}: LinearInterestRequest): BigNumber {
  const timeDelta = RayMath.wadToRay(valueToZDBigNumber(currentTimestamp - lastUpdateTimestamp))
  const timeDeltaInSeconds = RayMath.rayDiv(timeDelta, RayMath.wadToRay(SECONDS_PER_YEAR))
  const a = RayMath.rayMul(rate, timeDeltaInSeconds).plus(RayMath.RAY)
  return a
}

interface ReserveNormalizedIncomeRequest {
  rate: BigNumberValue
  index: BigNumberValue
  lastUpdateTimestamp: number
  currentTimestamp: number
}
export function getReserveNormalizedIncome({
  rate,
  index,
  lastUpdateTimestamp,
  currentTimestamp,
}: ReserveNormalizedIncomeRequest): BigNumber {
  if (valueToZDBigNumber(rate).eq('0')) {
    return valueToZDBigNumber(index)
  }

  const cumulatedInterest = calculateLinearInterest({
    rate,
    currentTimestamp,
    lastUpdateTimestamp,
  })

  return RayMath.rayMul(cumulatedInterest, index)
}

interface LinearBalanceRequest {
  balance: BigNumberValue
  index: BigNumberValue
  rate: BigNumberValue
  lastUpdateTimestamp: number
  currentTimestamp: number
}
export function getLinearBalance({
  balance,
  index,
  rate,
  lastUpdateTimestamp,
  currentTimestamp,
}: LinearBalanceRequest) {
  return RayMath.rayToWad(
    RayMath.rayMul(
      RayMath.wadToRay(balance),
      getReserveNormalizedIncome({
        rate,
        index,
        lastUpdateTimestamp,
        currentTimestamp,
      })
    )
  )
}

interface CompoundedStableBalanceRequest {
  principalBalance: BigNumberValue
  userStableRate: BigNumberValue
  lastUpdateTimestamp: number
  currentTimestamp: number
}

export function getCompoundedStableBalance({
  principalBalance: _principalBalance,
  userStableRate,
  lastUpdateTimestamp,
  currentTimestamp,
}: CompoundedStableBalanceRequest): BigNumber {
  const principalBalance = valueToZDBigNumber(_principalBalance)
  if (principalBalance.eq('0')) {
    return principalBalance
  }

  const cumulatedInterest = calculateCompoundedInterest({
    rate: userStableRate,
    currentTimestamp,
    lastUpdateTimestamp,
  })
  const principalBalanceRay = RayMath.wadToRay(principalBalance)

  return RayMath.rayToWad(RayMath.rayMul(principalBalanceRay, cumulatedInterest))
}

interface HealthFactorFromBalanceRequest {
  collateralBalanceMarketReferenceCurrency: BigNumberValue
  borrowBalanceMarketReferenceCurrency: BigNumberValue
  currentLiquidationThreshold: BigNumberValue
}

export function calculateHealthFactorFromBalances({
  borrowBalanceMarketReferenceCurrency,
  collateralBalanceMarketReferenceCurrency,
  currentLiquidationThreshold,
}: HealthFactorFromBalanceRequest): BigNumber {
  if (valueToBigNumber(borrowBalanceMarketReferenceCurrency).eq(0)) {
    return valueToBigNumber('-1') // Invalid number
  }

  return valueToBigNumber(collateralBalanceMarketReferenceCurrency)
    .multipliedBy(valueToBigNumber(currentLiquidationThreshold))
    .shiftedBy(LTV_PRECISION * -1)
    .div(valueToBigNumber(borrowBalanceMarketReferenceCurrency))
}

interface HealthFactorFromBalanceBigUnitsRequest {
  collateralBalanceMarketReferenceCurrency: BigNumberValue
  borrowBalanceMarketReferenceCurrency: BigNumberValue
  currentLiquidationThreshold: BigNumberValue
}
export function calculateHealthFactorFromBalancesBigUnits({
  collateralBalanceMarketReferenceCurrency,
  borrowBalanceMarketReferenceCurrency,
  currentLiquidationThreshold,
}: HealthFactorFromBalanceBigUnitsRequest): BigNumber {
  return calculateHealthFactorFromBalances({
    collateralBalanceMarketReferenceCurrency,
    borrowBalanceMarketReferenceCurrency,
    currentLiquidationThreshold: valueToBigNumber(currentLiquidationThreshold)
      .shiftedBy(LTV_PRECISION)
      .decimalPlaces(0, BigNumber.ROUND_DOWN),
  })
}

interface AvailableBorrowsMarketReferenceCurrencyRequest {
  collateralBalanceMarketReferenceCurrency: BigNumberValue
  borrowBalanceMarketReferenceCurrency: BigNumberValue
  currentLtv: BigNumberValue
}

export function calculateAvailableBorrowsMarketReferenceCurrency({
  collateralBalanceMarketReferenceCurrency,
  borrowBalanceMarketReferenceCurrency,
  currentLtv,
}: AvailableBorrowsMarketReferenceCurrencyRequest): BigNumber {
  if (valueToZDBigNumber(currentLtv).eq(0)) {
    return valueToZDBigNumber('0')
  }

  const availableBorrowsMarketReferenceCurrency = valueToZDBigNumber(collateralBalanceMarketReferenceCurrency)
    .multipliedBy(valueToBigNumber(currentLtv))
    .shiftedBy(LTV_PRECISION * -1)
    .minus(valueToBigNumber(borrowBalanceMarketReferenceCurrency))
  return availableBorrowsMarketReferenceCurrency.gt('0')
    ? availableBorrowsMarketReferenceCurrency
    : valueToZDBigNumber('0')
}

interface MarketReferenceCurrencyAndUsdBalanceRequest {
  balance: BigNumberValue
  priceInMarketReferenceCurrency: BigNumberValue
  marketRefCurrencyDecimals: number
  decimals: number
  marketRefPriceInUsd: BigNumberValue
}

interface MarketReferenceAndUsdBalanceResponse {
  marketReferenceCurrencyBalance: BigNumber
  usdBalance: BigNumber
}
/**
 * @returns non humanized/normalized values for usd/marketReference
 */
export function getMarketReferenceCurrencyAndUsdBalance({
  balance,
  priceInMarketReferenceCurrency,
  marketRefCurrencyDecimals,
  decimals,
  marketRefPriceInUsd,
}: MarketReferenceCurrencyAndUsdBalanceRequest): MarketReferenceAndUsdBalanceResponse {
  const marketReferenceCurrencyBalance = valueToZDBigNumber(balance)
    .multipliedBy(valueToBigNumber(priceInMarketReferenceCurrency))
    .shiftedBy(decimals * -1)
  const usdBalance = marketReferenceCurrencyBalance
    .multipliedBy(valueToBigNumber(marketRefPriceInUsd))
    .shiftedBy(marketRefCurrencyDecimals * -1)
  return { marketReferenceCurrencyBalance, usdBalance }
}
