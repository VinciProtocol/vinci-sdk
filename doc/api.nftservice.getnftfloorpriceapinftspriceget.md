[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NftService](./api.nftservice.md) &gt; [getNftFloorPriceApiNftsPriceGet](./api.nftservice.getnftfloorpriceapinftspriceget.md)

## NftService.getNftFloorPriceApiNftsPriceGet() method

Get NFT Floor Price Get NFT floor price

<b>Signature:</b>

```typescript
static getNftFloorPriceApiNftsPriceGet(address: string, chain: Chain): CancelablePromise<PriceResp>;
```

## Parameters

| Parameter | Type                    | Description        |
| --------- | ----------------------- | ------------------ |
| address   | string                  | The address        |
| chain     | [Chain](./api.chain.md) | The chain to query |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[PriceResp](./api.priceresp.md)<!-- -->&gt;

PriceResp Successful Response

## Exceptions

ApiError
