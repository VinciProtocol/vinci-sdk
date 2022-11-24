import { useMemo } from 'react'

import { useAppSelector } from 'packages/store/src'

import type { UserNFTVault } from '../contract/uiPool/userReservesDataFromAllPools/adapter/nftAdapter'
import { getUserNFTVault } from '../contract/uiPool/userReservesDataFromAllPools/adapter/nftAdapter'
import type { UserReserves } from '../contract/uiPool/userReservesDataFromAllPools/adapter/reservesAdapter'
import { getUserReserves } from '../contract/uiPool/userReservesDataFromAllPools/adapter/reservesAdapter'

import { selectData } from '../contract/uiPool/userReservesDataFromAllPools'

type UserReservesDatas = Array<{ id: string; userReserves: UserReserves[]; userNFTVaults: UserNFTVault[] }>
export const useUserReservesDatas = () => {
  const data = useAppSelector(selectData)

  const userReservesDatas: UserReservesDatas = useMemo(() => {
    if (!data) return []
    return data.map(({ id, userReservesData, userNFTVaultsData }) => {
      const userNFTVaults = getUserNFTVault(userNFTVaultsData)
      const userReserves = getUserReserves(userReservesData)
      return {
        id,
        userNFTVaults,
        userReserves,
      }
    })
  }, [data])

  return userReservesDatas
}
