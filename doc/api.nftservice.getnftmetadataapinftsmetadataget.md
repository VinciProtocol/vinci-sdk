[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NftService](./api.nftservice.md) &gt; [getNftMetadataApiNftsMetadataGet](./api.nftservice.getnftmetadataapinftsmetadataget.md)

## NftService.getNftMetadataApiNftsMetadataGet() method

Get NFT Metadata Get NFT data, including metadata (where available), for the given NFT token ID and contract address.

<b>Signature:</b>

```typescript
static getNftMetadataApiNftsMetadataGet(chain: Chain, address: string, tokenId: string, format?: Format): CancelablePromise<NFTResp>;
```

## Parameters

| Parameter | Type                      | Description                                  |
| --------- | ------------------------- | -------------------------------------------- |
| chain     | [Chain](./api.chain.md)   | The chain to query                           |
| address   | string                    | The address                                  |
| tokenId   | string                    | The ID of the token                          |
| format    | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTResp](./api.nftresp.md)<!-- -->&gt;

NFTResp Successful Response

## Exceptions

ApiError
