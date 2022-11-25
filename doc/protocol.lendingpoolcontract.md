[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [LendingPoolContract](./protocol.lendingpoolcontract.md)

## LendingPoolContract class

<b>Signature:</b>

```typescript
export declare class LendingPoolContract extends BaseService<ILendingPool> implements LendingPoolInterface
```

<b>Extends:</b> BaseService&lt;ILendingPool

<b>Implements:</b> LendingPoolInterface

## Constructors

| Constructor                                                                                   | Modifiers | Description                                                             |
| --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------- |
| [(constructor)(provider, lendingPoolConfig)](./protocol.lendingpoolcontract._constructor_.md) |           | Constructs a new instance of the <code>LendingPoolContract</code> class |

## Properties

| Property                                                                                                 | Modifiers | Type                                | Description |
| -------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------- | ----------- |
| [erc1155Service](./protocol.lendingpoolcontract.erc1155service.md)                                       |           | IERC1155ServiceInterface            |             |
| [erc20Service](./protocol.lendingpoolcontract.erc20service.md)                                           |           | IERC20ServiceInterface              |             |
| [erc721Service](./protocol.lendingpoolcontract.erc721service.md)                                         |           | IERC721ServiceInterface             |             |
| [flashLiquidationAddress](./protocol.lendingpoolcontract.flashliquidationaddress.md)                     |           | string                              |             |
| [liquiditySwapAdapterService](./protocol.lendingpoolcontract.liquidityswapadapterservice.md)             |           | LiquiditySwapAdapterInterface       |             |
| [provider](./protocol.lendingpoolcontract.provider.md)                                                   |           | any                                 |             |
| [repayWithCollateralAdapterService](./protocol.lendingpoolcontract.repaywithcollateraladapterservice.md) |           | RepayWithCollateralAdapterInterface |             |
| [repayWithCollateralAddress](./protocol.lendingpoolcontract.repaywithcollateraladdress.md)               |           | string                              |             |
| [swapCollateralAddress](./protocol.lendingpoolcontract.swapcollateraladdress.md)                         |           | string                              |             |
| [synthetixService](./protocol.lendingpoolcontract.synthetixservice.md)                                   |           | SynthetixInterface                  |             |
| [wethGatewayService](./protocol.lendingpoolcontract.wethgatewayservice.md)                               |           | WETHGatewayInterface                |             |
| [wPUNKSGatewayService](./protocol.lendingpoolcontract.wpunksgatewayservice.md)                           |           | WPUNKSGatewayService                |             |

## Methods

| Method                                                                                                                                                           | Modifiers | Description |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| [borrow({ lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, referralCode, debtTokenAddress, })](./protocol.lendingpoolcontract.borrow.md) |           |             |
| [deposit({ lendingPoolAddress, user, reserve, amount, onBehalfOf, referralCode, })](./protocol.lendingpoolcontract.deposit.md)                                   |           |             |
| [depositNFT(payload)](./protocol.lendingpoolcontract.depositnft.md)                                                                                              |           |             |
| [repay({ lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, })](./protocol.lendingpoolcontract.repay.md)                                   |           |             |
| [withdraw({ lendingPoolAddress, user, reserve, amount, onBehalfOf, vTokenAddress, })](./protocol.lendingpoolcontract.withdraw.md)                                |           |             |
| [withdrawNFT(payload)](./protocol.lendingpoolcontract.withdrawnft.md)                                                                                            |           |             |
