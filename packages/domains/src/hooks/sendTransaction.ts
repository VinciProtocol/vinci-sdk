import { BigNumber as BN } from '@ethersproject/bignumber'
import type { transactionType } from '@vinci-protocol/protocol'
import { useCallback } from 'react'
import { useConfig } from '../config'

export const useSendTransaction = () => {
  const { web3Provider } = useConfig()

  const send = useCallback(
    (extendedTxData: transactionType) => {
      const { from, ...txData } = extendedTxData
      const signer = web3Provider.getSigner(from)
      return signer.sendTransaction({
        ...txData,
        value: txData.value ? BN.from(txData.value) : undefined,
      })
    },
    [web3Provider]
  )

  return send
}

export type SendTransaction = ReturnType<typeof useSendTransaction>
