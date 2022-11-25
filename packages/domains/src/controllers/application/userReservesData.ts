import { useMemo, useCallback } from 'react'

import { vinciSDKReducers } from '@vinci-protocol/store'
const { useRequestController } = vinciSDKReducers.contract.uiPool.userReservesDataFromAllPools
import { useVinciContract } from '../..'
import { useConfig } from '../../config'

export const useUserReservesDataController = () => {
  const { uiPool } = useVinciContract()
  const { usePolling, polling, clearData } = useRequestController()
  const { market, networkAccount: account } = useConfig()
  const query = useMemo(
    () => ({
      registry: market.addresses.LENDING_POOL_ADDRESSES_PROVIDER_REGISTRY,
      uiPool,
      user: account,
    }),
    [account, market.addresses.LENDING_POOL_ADDRESSES_PROVIDER_REGISTRY, uiPool]
  )

  usePolling(query, (query) => !query || !query.user || !query.registry || !query.uiPool, 5 * 1000)

  const restart = useCallback(() => {
    polling.restart(query)
  }, [polling, query])

  return {
    stop: polling.stop,
    restart,
    clearData,
  }
}

export type UseUserReservesDataController = ReturnType<typeof useUserReservesDataController>
