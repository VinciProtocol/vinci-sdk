[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [ERC20Service](./protocol.erc20service.md)

## ERC20Service class

<b>Signature:</b>

```typescript
export declare class ERC20Service extends BaseService<IERC20Detailed> implements IERC20ServiceInterface
```

<b>Extends:</b> BaseService&lt;IERC20Detailed

<b>Implements:</b> IERC20ServiceInterface

## Constructors

| Constructor                                                         | Modifiers | Description                                                      |
| ------------------------------------------------------------------- | --------- | ---------------------------------------------------------------- |
| [(constructor)(provider)](./protocol.erc20service._constructor_.md) |           | Constructs a new instance of the <code>ERC20Service</code> class |

## Properties

| Property                                                  | Modifiers | Type                                    | Description |
| --------------------------------------------------------- | --------- | --------------------------------------- | ----------- |
| [provider](./protocol.erc20service.provider.md)           |           | any                                     |             |
| [tokenDecimals](./protocol.erc20service.tokendecimals.md) |           | Record&lt;string, number&gt;            |             |
| [tokenMetadata](./protocol.erc20service.tokenmetadata.md) |           | Record&lt;string, TokenMetadataType&gt; |             |

## Methods

| Method                                                                                | Modifiers | Description |
| ------------------------------------------------------------------------------------- | --------- | ----------- |
| [approve({ user, token, spender, amount })](./protocol.erc20service.approve.md)       |           |             |
| [decimalsOf(token)](./protocol.erc20service.decimalsof.md)                            |           |             |
| [getTokenData(token)](./protocol.erc20service.gettokendata.md)                        |           |             |
| [isApproved({ user, token, spender, amount })](./protocol.erc20service.isapproved.md) |           |             |
