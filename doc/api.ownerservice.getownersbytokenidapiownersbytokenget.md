[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [OwnerService](./api.ownerservice.md) &gt; [getOwnersByTokenIdApiOwnersByTokenGet](./api.ownerservice.getownersbytokenidapiownersbytokenget.md)

## OwnerService.getOwnersByTokenIdApiOwnersByTokenGet() method

Get Owners By Token Id Get owners of a specific NFT given the contract address and token ID.

<b>Signature:</b>

```typescript
static getOwnersByTokenIdApiOwnersByTokenGet(chain: Chain, address: string, tokenId: string, cursor?: string, limit?: number, format?: Format): CancelablePromise<NFTRespPaginationResponse>;
```

## Parameters

| Parameter | Type                      | Description                                                                                      |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| chain     | [Chain](./api.chain.md)   | The chain to query                                                                               |
| address   | string                    | The address                                                                                      |
| tokenId   | string                    | The ID of the token                                                                              |
| cursor    | string                    | <i>(Optional)</i> The cursor returned in the previous response (used for getting the next page). |
| limit     | number                    | <i>(Optional)</i> The desired page size of the result.                                           |
| format    | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID                                                     |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTRespPaginationResponse](./api.nftresppaginationresponse.md)<!-- -->&gt;

NFTRespPaginationResponse Successful Response

## Exceptions

ApiError
