[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NftService](./api.nftservice.md) &gt; [searchNftsApiNftsSearchGet](./api.nftservice.searchnftsapinftssearchget.md)

## NftService.searchNftsApiNftsSearchGet() method

Search NFTs Get NFTs that match a given metadata search query.

<b>Signature:</b>

```typescript
static searchNftsApiNftsSearchGet(chain: Chain, q: string, fromBlock?: number, toBlock?: number, format?: Format, filter?: Filter, addresses?: Array<string>): CancelablePromise<NFTRespPaginationResponse>;
```

## Parameters

| Parameter | Type                      | Description                                                                                                                                                                                       |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chain     | [Chain](./api.chain.md)   | The chain to query                                                                                                                                                                                |
| q         | string                    | The search string                                                                                                                                                                                 |
| fromBlock | number                    | <i>(Optional)</i> The minimum block number from which to start the search                                                                                                                         |
| toBlock   | number                    | <i>(Optional)</i> The maximum block number from which to end the search                                                                                                                           |
| format    | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID                                                                                                                                                      |
| filter    | [Filter](./api.filter.md) | <i>(Optional)</i> What fields the search should match on. To look into the entire metadata set the value to "global". To have a better response time you can look into a specific field like name |
| addresses | Array&lt;string&gt;       | <i>(Optional)</i> The addresses to get metadata for                                                                                                                                               |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[NFTRespPaginationResponse](./api.nftresppaginationresponse.md)<!-- -->&gt;

NFTRespPaginationResponse Successful Response

## Exceptions

ApiError
