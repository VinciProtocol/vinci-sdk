[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NftService](./api.nftservice.md) &gt; [getNftsByContractApiNftsByContractGet](./api.nftservice.getnftsbycontractapinftsbycontractget.md)

## NftService.getNftsByContractApiNftsByContractGet() method

Get NFTs By Contract Get NFTs for a given contract address, including metadata for all NFTs (where available).

<b>Signature:</b>

```typescript
static getNftsByContractApiNftsByContractGet(chain: Chain, address: string, cursor?: string, limit?: number, format?: Format): CancelablePromise<NFTRespPaginationResponse>;
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

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTRespPaginationResponse](./api.nftresppaginationresponse.md)<!-- -->&gt;

NFTRespPaginationResponse Successful Response

## Exceptions

ApiError
