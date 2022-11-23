import BigNumber from 'bignumber.js'
import type { BigNumberValue } from '@vinci-protocol/math'
import { valueToBigNumber } from '@vinci-protocol/math'
import { USD_DECIMALS } from '@vinci-protocol/math'

interface NativeToUSD {
  amount: BigNumber
  currencyDecimals: number
  priceInMarketReferenceCurrency: BigNumberValue
  marketRefCurrencyDecimals: number
  marketRefPriceInUsd: BigNumberValue
}

export function nativeToUSD({
  amount,
  currencyDecimals,
  priceInMarketReferenceCurrency,
  marketRefCurrencyDecimals,
  marketRefPriceInUsd,
}: NativeToUSD) {
  return amount
    .multipliedBy(valueToBigNumber(priceInMarketReferenceCurrency))
    .multipliedBy(valueToBigNumber(marketRefPriceInUsd))
    .dividedBy(new BigNumber(1).shiftedBy(currencyDecimals + marketRefCurrencyDecimals + USD_DECIMALS))
    .toString()
}
