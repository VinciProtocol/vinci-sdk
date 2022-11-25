[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [LendingPoolContract](./protocol.lendingpoolcontract.md) &gt; [borrow](./protocol.lendingpoolcontract.borrow.md)

## LendingPoolContract.borrow() method

<b>Signature:</b>

```typescript
borrow({ lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, referralCode, debtTokenAddress, }: LPBorrowParamsType): Promise<EthereumTransactionTypeExtended[]>;
```

## Parameters

| Parameter                                                                                                    | Type               | Description |
| ------------------------------------------------------------------------------------------------------------ | ------------------ | ----------- |
| { lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, referralCode, debtTokenAddress, } | LPBorrowParamsType |             |

<b>Returns:</b>

Promise&lt;[EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)<!-- -->\[\]&gt;
