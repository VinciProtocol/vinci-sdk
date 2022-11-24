import type { UiPoolDataContract } from '@vinci-protocol/protocol'
import { getAddress, getString } from 'packages/store/src/utils/adapter'

export type ReservesDataProps = { registry: string; uiPool: UiPoolDataContract }
export const useReservesDataFromAllPools = (props: ReservesDataProps) => {
  const { registry, uiPool } = props
  if (!registry) return Promise.reject()
  return uiPool.contract.getReservesDataFromAllPools(registry).then((data) =>
    data.map(({ reservesData, marketId, currencyInfo, nftVaultsData }) => ({
      id: marketId,
      reservesData: reservesData.map((reserve) => {
        const {
          name,
          symbol,
          usageAsCollateralEnabled,
          borrowingEnabled,
          stableBorrowRateEnabled,
          isActive,
          isFrozen,
          lastUpdateTimestamp,
        } = reserve

        const address = getAddress(reserve, [
          'underlyingAsset',
          'vTokenAddress',
          'stableDebtTokenAddress',
          'variableDebtTokenAddress',
          'interestRateStrategyAddress',
        ])

        const strings = getString(reserve, [
          'decimals',
          'baseLTVasCollateral',
          'reserveLiquidationThreshold',
          'reserveLiquidationBonus',
          'reserveFactor',
          'liquidityIndex',
          'variableBorrowIndex',
          'liquidityRate',
          'variableBorrowRate',
          'stableBorrowRate',
          'availableLiquidity',
          'totalPrincipalStableDebt',
          'averageStableRate',
          'stableDebtLastUpdateTimestamp',
          'totalScaledVariableDebt',
          'priceInMarketReferenceCurrency',
          'variableRateSlope1',
          'variableRateSlope2',
          'stableRateSlope1',
          'stableRateSlope2',
        ])

        const returnValue = {
          name,
          symbol,
          ...address,
          ...strings,
          usageAsCollateralEnabled,
          borrowingEnabled,
          stableBorrowRateEnabled,
          isActive,
          isFrozen,
          lastUpdateTimestamp,
        }
        return returnValue
      }),
      currencyInfo: getString(currencyInfo, [
        'marketReferenceCurrencyUnit',
        'marketReferenceCurrencyPriceInUsd',
        'networkBaseTokenPriceDecimals',
        'networkBaseTokenPriceInUsd',
      ]),
      nftVaultsData: nftVaultsData.map((nftVault) => {
        const { name, symbol, usageAsCollateralEnabled, isActive, isFrozen, lockActionExpiration } = nftVault
        const address = getAddress(nftVault, ['underlyingAsset', 'nTokenAddress'])
        const strings = getString(nftVault, [
          'baseLTVasCollateral',
          'reserveLiquidationThreshold',
          'reserveLiquidationBonus',
          'priceInMarketReferenceCurrency',
          'totalNumberOfCollateral',
        ])
        return {
          name,
          symbol,
          usageAsCollateralEnabled,
          isActive,
          isFrozen,
          lockActionExpiration,
          ...address,
          ...strings,
        }
      }),
    }))
  )
}

export type ReservesData = Awaited<ReturnType<typeof useReservesDataFromAllPools>>[0]
