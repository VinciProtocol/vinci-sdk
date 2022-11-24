import type { UiPoolDataContract } from '@vinci-protocol/protocol'
import { getAddress, getString } from 'packages/store/src/utils/adapter'

export type UserReservesDataProps = {
  registry: string
  user: string
  uiPool: UiPoolDataContract
}
export const useUserReservesDataFromAllPools = (props: UserReservesDataProps) => {
  const { registry, user, uiPool } = props
  if (!registry || !user) return Promise.reject()
  return uiPool.contract.getUserReservesDataFromAllPools(registry, user).then((data) => {
    return data.map(({ marketId, userReservesData, userNFTVaultsData }) => {
      return {
        id: marketId,
        userReservesData: userReservesData.map((userReserve) => {
          const { usageAsCollateralEnabledOnUser } = userReserve
          const address = getAddress(userReserve, ['underlyingAsset'])
          const strings = getString(userReserve, [
            'scaledVTokenBalance',
            'stableBorrowRate',
            'scaledVariableDebt',
            'principalStableDebt',
            'stableBorrowLastUpdateTimestamp',
          ])
          return {
            usageAsCollateralEnabledOnUser,
            ...address,
            ...strings,
          }
        }),
        userNFTVaultsData: userNFTVaultsData.map((userNFTVault) => {
          const { usageAsCollateralEnabledOnUser, tokenIds, locks } = userNFTVault
          const address = getAddress(userNFTVault, ['underlyingAsset'])
          const strings = getString(userNFTVault, ['nTokenBalance'])
          return {
            usageAsCollateralEnabledOnUser,
            ...address,
            ...strings,
            tokenIds: tokenIds.map((id) => id.toString()),
            locks,
          }
        }),
      }
    })
  })
}

export type UserReservesData = Awaited<ReturnType<typeof useUserReservesDataFromAllPools>>[0]
