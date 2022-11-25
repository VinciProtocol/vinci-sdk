import { createContext } from 'packages/domains/src/utils/createContext'

import { useERC721Controller } from './application/erc721'
import { useLendingPoolController } from './application/lendingPool'
import { useReservesDataController } from './application/reservesData'
import { useUserReservesDataController } from './application/userReservesData'

export const useControllersService = () => {
  const reservesData = useReservesDataController()
  const userReservesData = useUserReservesDataController()

  const lendingPool = useLendingPoolController()
  const erc721 = useERC721Controller()

  return {
    reservesData,
    userReservesData,
    lendingPool,
    erc721,
  }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
