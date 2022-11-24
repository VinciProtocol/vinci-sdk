import { useMemo } from 'react'

import { useAppSelector } from 'packages/store/src'

import type { Currency } from '../contract/uiPool/reservesDataFromAllPools/adapter/currencyAdapter'
import { getCurrency } from '../contract/uiPool/reservesDataFromAllPools/adapter/currencyAdapter'
import type { NFTVault } from '../contract/uiPool/reservesDataFromAllPools/adapter/nftAdapter'
import { getNFTVaults } from '../contract/uiPool/reservesDataFromAllPools/adapter/nftAdapter'
import type { Reserves } from '../contract/uiPool/reservesDataFromAllPools/adapter/reservesAdapter'
import { getReserves } from '../contract/uiPool/reservesDataFromAllPools/adapter/reservesAdapter'

import { selectData } from '../contract/uiPool/reservesDataFromAllPools'

type ReservesDatas = Array<{
  id: string
  nftVaults: NFTVault[]
  reserves: Reserves[]
  currency: Currency
}>
export const useReservesDatas = () => {
  const data = useAppSelector(selectData)

  const reservesDatas: ReservesDatas = useMemo(() => {
    if (!data) return []
    return data
      .filter(({ id }) => id)
      .map(({ nftVaultsData, reservesData, currencyInfo, id }) => {
        const nftVaults = getNFTVaults(nftVaultsData)
        const reserves = getReserves(reservesData)
        const currency = getCurrency(currencyInfo)
        return {
          id,
          nftVaults,
          reserves,
          currency,
        }
      })
  }, [data])

  return reservesDatas
}
