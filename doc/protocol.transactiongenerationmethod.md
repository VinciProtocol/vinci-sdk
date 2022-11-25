[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [TransactionGenerationMethod](./protocol.transactiongenerationmethod.md)

## TransactionGenerationMethod type

<b>Signature:</b>

```typescript
export type TransactionGenerationMethod = {
  rawTxMethod: () => Promise<PopulatedTransaction>
  from: tEthereumAddress
  value?: string
  gasSurplus?: number
  action?: ProtocolAction
}
```

<b>References:</b> [tEthereumAddress](./protocol.tethereumaddress.md)<!-- -->, [ProtocolAction](./protocol.protocolaction.md)
