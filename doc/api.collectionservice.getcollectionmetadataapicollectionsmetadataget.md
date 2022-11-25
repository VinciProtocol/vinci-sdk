[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [CollectionService](./api.collectionservice.md) &gt; [getCollectionMetadataApiCollectionsMetadataGet](./api.collectionservice.getcollectionmetadataapicollectionsmetadataget.md)

## CollectionService.getCollectionMetadataApiCollectionsMetadataGet() method

Get Collection Metadata Get the collection / contract level metadata for a given contract (name, symbol, base token URI).

<b>Signature:</b>

```typescript
static getCollectionMetadataApiCollectionsMetadataGet(address: string, chain: Chain): CancelablePromise<NFTSingle>;
```

## Parameters

| Parameter | Type                    | Description        |
| --------- | ----------------------- | ------------------ |
| address   | string                  | The address        |
| chain     | [Chain](./api.chain.md) | The chain to query |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTSingle](./api.nftsingle.md)<!-- -->&gt;

NFTSingle Successful Response

## Exceptions

ApiError
