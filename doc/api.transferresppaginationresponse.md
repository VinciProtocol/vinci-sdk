[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [TransferRespPaginationResponse](./api.transferresppaginationresponse.md)

## TransferRespPaginationResponse type

<b>Signature:</b>

```typescript
export type TransferRespPaginationResponse = {
  status?: Status
  total?: number
  page?: number
  page_size?: number
  cursor?: string
  result: Array<TransferResp>
}
```

<b>References:</b> [Status](./api.status.md)<!-- -->, [TransferResp](./api.transferresp.md)
