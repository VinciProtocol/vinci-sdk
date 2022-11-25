[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [ERC721Service](./protocol.erc721service.md)

## ERC721Service class

<b>Signature:</b>

```typescript
export declare class ERC721Service extends BaseService<IERC721Detailed> implements IERC721ServiceInterface
```

<b>Extends:</b> BaseService&lt;IERC721Detailed

<b>Implements:</b> IERC721ServiceInterface

## Constructors

| Constructor                                                          | Modifiers | Description                                                       |
| -------------------------------------------------------------------- | --------- | ----------------------------------------------------------------- |
| [(constructor)(provider)](./protocol.erc721service._constructor_.md) |           | Constructs a new instance of the <code>ERC721Service</code> class |

## Properties

| Property                                         | Modifiers | Type | Description |
| ------------------------------------------------ | --------- | ---- | ----------- |
| [provider](./protocol.erc721service.provider.md) |           | any  |             |

## Methods

| Method                                                                                              | Modifiers | Description |
| --------------------------------------------------------------------------------------------------- | --------- | ----------- |
| [approve({ user, spender, token, tokenId })](./protocol.erc721service.approve.md)                   |           |             |
| [isApproved({ user, token, spender, tokenId })](./protocol.erc721service.isapproved.md)             |           |             |
| [isApprovedForAll({ user, token, spender })](./protocol.erc721service.isapprovedforall.md)          |           |             |
| [setApprovalForAll({ user, spender, token, value })](./protocol.erc721service.setapprovalforall.md) |           |             |
