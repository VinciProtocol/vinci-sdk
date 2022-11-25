[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [TransferService](./api.transferservice.md) &gt; [getTransfersByBlockApiTransfersByBlockGet](./api.transferservice.gettransfersbyblockapitransfersbyblockget.md)

## TransferService.getTransfersByBlockApiTransfersByBlockGet() method

Get Transfers By Block Get transfers of NFTs given a block number or block hash.

<b>Signature:</b>

```typescript
static getTransfersByBlockApiTransfersByBlockGet(chain: Chain, blockNumberOrHash: string, cursor?: string, limit?: number, format?: Format): CancelablePromise<TransferRespPaginationResponse>;
```

## Parameters

| Parameter         | Type                      | Description                                                                                      |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| chain             | [Chain](./api.chain.md)   | The chain to query                                                                               |
| blockNumberOrHash | string                    | The block number or block hash                                                                   |
| cursor            | string                    | <i>(Optional)</i> The cursor returned in the previous response (used for getting the next page). |
| limit             | number                    | <i>(Optional)</i> The desired page size of the result.                                           |
| format            | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID                                                     |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[TransferRespPaginationResponse](./api.transferresppaginationresponse.md)<!-- -->&gt;

TransferRespPaginationResponse Successful Response

## Exceptions

ApiError
