[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [LendingPoolContract](./protocol.lendingpoolcontract.md) &gt; [withdraw](./protocol.lendingpoolcontract.withdraw.md)

## LendingPoolContract.withdraw() method

<b>Signature:</b>

```typescript
withdraw({ lendingPoolAddress, user, reserve, amount, onBehalfOf, vTokenAddress, }: LPWithdrawParamsType): Promise<EthereumTransactionTypeExtended[]>;
```

## Parameters

| Parameter                                                                 | Type                 | Description |
| ------------------------------------------------------------------------- | -------------------- | ----------- |
| { lendingPoolAddress, user, reserve, amount, onBehalfOf, vTokenAddress, } | LPWithdrawParamsType |             |

<b>Returns:</b>

Promise&lt;[EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)<!-- -->\[\]&gt;
