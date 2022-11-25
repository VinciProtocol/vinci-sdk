[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [CancelablePromise](./api.cancelablepromise.md) &gt; [catch](./api.cancelablepromise.catch.md)

## CancelablePromise.catch() method

<b>Signature:</b>

```typescript
catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<T | TResult>;
```

## Parameters

| Parameter  | Type                                                                | Description       |
| ---------- | ------------------------------------------------------------------- | ----------------- |
| onRejected | ((reason: any) =&gt; TResult \| PromiseLike&lt;TResult&gt;) \| null | <i>(Optional)</i> |

<b>Returns:</b>

Promise&lt;T \| TResult&gt;
