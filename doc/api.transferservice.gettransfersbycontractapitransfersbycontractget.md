[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [TransferService](./api.transferservice.md) &gt; [getTransfersByContractApiTransfersByContractGet](./api.transferservice.gettransfersbycontractapitransfersbycontractget.md)

## TransferService.getTransfersByContractApiTransfersByContractGet() method

Get Transfers By Contract Get transfers of NFTs for a given contract and other parameters.

<b>Signature:</b>

```typescript
static getTransfersByContractApiTransfersByContractGet(chain: Chain, address: string, cursor?: string, limit?: number, format?: Format): CancelablePromise<TransferRespPaginationResponse>;
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

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[TransferRespPaginationResponse](./api.transferresppaginationresponse.md)<!-- -->&gt;

TransferRespPaginationResponse Successful Response

## Exceptions

ApiError
