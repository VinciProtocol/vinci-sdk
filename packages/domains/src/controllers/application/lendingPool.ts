import { useState, useCallback } from 'react'

import { usePost } from '@vinci-protocol/hooks'
import { useSendTransaction } from 'packages/domains/src/hooks/sendTransaction'
import type { LendingPoolContract } from '@vinci-protocol/protocol'
import { useVinciContract } from '../..'
import { TransactionStatus, transaction } from '../adapter/transaction'
import { useConfig } from '../../config'

type PropsType<T> = T extends (props: infer P) => any ? P : any
const createLendingPoolUse =
  <K extends keyof LendingPoolContract, F extends LendingPoolContract[K], P extends PropsType<F>>(key: K) =>
  (lendingPool: LendingPoolContract) => {
    const [status, setStatus] = useState<TransactionStatus>(TransactionStatus.init)
    const sendTransaction = useSendTransaction()
    const { onSendTransaction } = useConfig()

    const fn = useCallback(
      (props: P) => {
        console.log(`[domains] [LendingPool] [${key}] [req]`, props)
        const promise = transaction({
          createTransaction: lendingPool[key](props),
          setStatus,
          sendTransaction,
          isOnlyApprove: props.isOnlyApprove,
        })
        return onSendTransaction ? onSendTransaction(promise) : promise
      },
      [lendingPool, sendTransaction]
    )

    const { post, cancel, loading } = usePost(fn)

    return { status, loading, post, cancel }
  }

const useDeposit = createLendingPoolUse('deposit')
const useWithdraw = createLendingPoolUse('withdraw')
const useBorrow = createLendingPoolUse('borrow')
const useRepay = createLendingPoolUse('repay')

const useDepositNFT = createLendingPoolUse('depositNFT')
const useWithdrawNFT = createLendingPoolUse('withdrawNFT')

export const useLendingPoolController = () => {
  const { lendingPool } = useVinciContract()
  const deposit = useDeposit(lendingPool)
  const withdraw = useWithdraw(lendingPool)

  const borrow = useBorrow(lendingPool)
  const repay = useRepay(lendingPool)

  const depositNFT = useDepositNFT(lendingPool)
  const withdrawNFT = useWithdrawNFT(lendingPool)

  return {
    deposit,
    withdraw,
    borrow,
    repay,
    depositNFT,
    withdrawNFT,
  }
}
