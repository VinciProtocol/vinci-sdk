[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [CollectionService](./api.collectionservice.md) &gt; [getCollectionsByWalletApiCollectionsByWalletGet](./api.collectionservice.getcollectionsbywalletapicollectionsbywalletget.md)

## CollectionService.getCollectionsByWalletApiCollectionsByWalletGet() method

Get Collections By Wallet Get NFT collections owned by a given wallet address.

<b>Signature:</b>

```typescript
static getCollectionsByWalletApiCollectionsByWalletGet(chain: Chain, address: string, cursor?: string, limit?: number, format?: Format): CancelablePromise<NFTSimplePaginationResponse>;
```

## Parameters

| Parameter | Type                      | Description                                                                                      |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| chain     | [Chain](./api.chain.md)   | The chain to query                                                                               |
| address   | string                    | The address                                                                                      |
| cursor    | string                    | <i>(Optional)</i> The cursor returned in the previous response (used for getting the next page). |
| limit     | number                    | <i>(Optional)</i> The desired page size of the result.                                           |
| format    | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID                                                     |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTSimplePaginationResponse](./api.nftsimplepaginationresponse.md)<!-- -->&gt;

NFTSimplePaginationResponse Successful Response

## Exceptions

ApiError
