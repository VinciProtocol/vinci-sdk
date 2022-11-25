[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)

## EthereumTransactionTypeExtended type

<b>Signature:</b>

```typescript
export type EthereumTransactionTypeExtended = {
  txType: eEthereumTxType
  tx: () => Promise<transactionType>
  gas: GasResponse
}
```

<b>References:</b> [eEthereumTxType](./protocol.eethereumtxtype.md)<!-- -->, [transactionType](./protocol.transactiontype.md)<!-- -->, [GasResponse](./protocol.gasresponse.md)
