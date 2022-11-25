[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [CancelablePromise](./api.cancelablepromise.md) &gt; [(constructor)](./api.cancelablepromise._constructor_.md)

## CancelablePromise.(constructor)

Constructs a new instance of the `CancelablePromise` class

<b>Signature:</b>

```typescript
constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void, onCancel: OnCancel) => void);
```

## Parameters

| Parameter | Type                                                                                                                       | Description |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| executor  | (resolve: (value: T \| PromiseLike&lt;T&gt;) =&gt; void, reject: (reason?: any) =&gt; void, onCancel: OnCancel) =&gt; void |             |
