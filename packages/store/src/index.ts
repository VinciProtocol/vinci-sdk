import type { ThunkAction, Action } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, AppState } from './store'
import contract from './contract'

export const vinciSDKReducer = { contract }

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

import isApproved from './contract/erc20/isApproved'
import reservesDataFromAllPools from './contract/uiPool/reservesDataFromAllPools'
import userReservesDataFromAllPools from './contract/uiPool/userReservesDataFromAllPools'

export const vinciSDKReducers = {
  contract: { erc20: { isApproved }, uiPool: { reservesDataFromAllPools, userReservesDataFromAllPools } },
}
