[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NFTRespPaginationResponse](./api.nftresppaginationresponse.md)

## NFTRespPaginationResponse type

<b>Signature:</b>

```typescript
export type NFTRespPaginationResponse = {
  status?: Status
  total?: number
  page?: number
  page_size?: number
  cursor?: string
  result: Array<NFTResp>
}
```

<b>References:</b> [Status](./api.status.md)<!-- -->, [NFTResp](./api.nftresp.md)
