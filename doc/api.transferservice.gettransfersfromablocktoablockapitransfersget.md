[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [TransferService](./api.transferservice.md) &gt; [getTransfersFromABlockToABlockApiTransfersGet](./api.transferservice.gettransfersfromablocktoablockapitransfersget.md)

## TransferService.getTransfersFromABlockToABlockApiTransfersGet() method

Get Transfers From A Block To A Block Get transfers of NFTs from a block number to a block number.

<b>Signature:</b>

```typescript
static getTransfersFromABlockToABlockApiTransfersGet(chain: Chain, cursor?: string, limit?: number, fromBlock?: number, toBlock?: number, format?: Format): CancelablePromise<TransferRespPaginationResponse>;
```

## Parameters

| Parameter | Type                      | Description                                                                                      |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------ |
| chain     | [Chain](./api.chain.md)   | The chain to query                                                                               |
| cursor    | string                    | <i>(Optional)</i> The cursor returned in the previous response (used for getting the next page). |
| limit     | number                    | <i>(Optional)</i> The desired page size of the result.                                           |
| fromBlock | number                    | <i>(Optional)</i> The minimum block number from which to start the search                        |
| toBlock   | number                    | <i>(Optional)</i> The maximum block number from which to end the search                          |
| format    | [Format](./api.format.md) | <i>(Optional)</i> The format of the token ID                                                     |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[TransferRespPaginationResponse](./api.transferresppaginationresponse.md)<!-- -->&gt;

TransferRespPaginationResponse Successful Response

## Exceptions

ApiError
