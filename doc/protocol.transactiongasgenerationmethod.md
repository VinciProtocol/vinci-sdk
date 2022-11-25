[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [TransactionGasGenerationMethod](./protocol.transactiongasgenerationmethod.md)

## TransactionGasGenerationMethod type

<b>Signature:</b>

```typescript
export type TransactionGasGenerationMethod = {
  txCallback: () => Promise<transactionType>
  action?: ProtocolAction
}
```

<b>References:</b> [transactionType](./protocol.transactiontype.md)<!-- -->, [ProtocolAction](./protocol.protocolaction.md)
