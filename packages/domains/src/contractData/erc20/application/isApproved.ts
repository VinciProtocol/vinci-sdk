import { vinciSDKReducers } from '@vinci-protocol/store'
const { useRequestController } = vinciSDKReducers.contract.erc20.isApproved
import { useEffect, useMemo } from 'react'
import { useConfig } from 'packages/domains/src/config'
import { useVinciContractData, useVinciContract } from 'packages/domains/src'

export const useIsApproved = () => {
  const { generalAssets } = useVinciContractData()
  const { networkAccount: account } = useConfig()
  const { ERC20Service } = useVinciContract()
  const { single } = useRequestController()

  const keys = useMemo(() => {
    const returnValue = generalAssets.map(
      ({ lendingPoolAddress, underlyingAsset }) => `${lendingPoolAddress}-${underlyingAsset}`
    )
    return returnValue
  }, [generalAssets])

  useEffect(() => {
    if (!account || !keys?.length) return
    const timer = setTimeout(() => {
      single.run({
        user: account,
        keys,
        amount: '1',
        erc20Service: ERC20Service,
      })
    }, 1000)
    return () => {
      clearTimeout(timer)
      single.stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ERC20Service, account, single, generalAssets])
}
