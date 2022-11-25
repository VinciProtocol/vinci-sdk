[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [LendingPoolContract](./protocol.lendingpoolcontract.md) &gt; [deposit](./protocol.lendingpoolcontract.deposit.md)

## LendingPoolContract.deposit() method

<b>Signature:</b>

```typescript
deposit({ lendingPoolAddress, user, reserve, amount, onBehalfOf, referralCode, }: LPDepositParamsType): Promise<EthereumTransactionTypeExtended[]>;
```

## Parameters

| Parameter                                                                | Type                | Description |
| ------------------------------------------------------------------------ | ------------------- | ----------- |
| { lendingPoolAddress, user, reserve, amount, onBehalfOf, referralCode, } | LPDepositParamsType |             |

<b>Returns:</b>

Promise&lt;[EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)<!-- -->\[\]&gt;
