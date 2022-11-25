[Home](./index.md) &gt; [@vinci-protocol/domains](./domains.md) &gt; [useVinciControllers](./domains.usevincicontrollers.md)

## useVinciControllers variable

<b>Signature:</b>

```typescript
useVinciControllers: () => {
    reservesData: {
        stop: () => void;
        restart: () => void;
        clearData: () => void;
    };
    userReservesData: {
        stop: () => void;
        restart: () => void;
        clearData: () => void;
    };
    lendingPool: {
        deposit: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                reserve: string;
                amount: string;
                onBehalfOf?: string;
                referralCode?: string;
            }) => Promise<void>;
            cancel: () => false;
        };
        withdraw: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                reserve: string;
                amount: string;
                onBehalfOf?: string;
                vTokenAddress?: string;
            }) => Promise<void>;
            cancel: () => false;
        };
        borrow: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                reserve: string;
                amount: string;
                interestRateMode: import("@vinci-protocol/protocol").InterestRate;
                debtTokenAddress?: string;
                onBehalfOf?: string;
                referralCode?: string;
            }) => Promise<void>;
            cancel: () => false;
        };
        repay: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                reserve: string;
                amount: string;
                interestRateMode: import("@vinci-protocol/protocol").InterestRate;
                onBehalfOf?: string;
            }) => Promise<void>;
            cancel: () => false;
        };
        depositNFT: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                nft: string;
                tokenIds: string[];
                amounts: string[];
                onBehalfOf?: string;
                referralCode?: string;
            } & {
                isPunks?: boolean;
            }) => Promise<void>;
            cancel: () => false;
        };
        withdrawNFT: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                lendingPoolAddress: string;
                user: string;
                nft: string;
                tokenIds: string[];
                amounts: string[];
                onBehalfOf?: string;
            } & {
                isPunks?: boolean;
            }) => Promise<void>;
            cancel: () => false;
        };
    };
    erc721: {
        setApprovalForAll: {
            status: import("./controllers/adapter/transaction").TransactionStatus;
            loading: boolean;
            post: (props: {
                user: string;
                spender: string;
                token: string;
                value: boolean;
            }, settings: {
                isOnlyApprove?: boolean;
            }) => Promise<void>;
            cancel: () => false;
        };
        isApprovedForAll: ({ user, token, spender }: {
            user: string;
            spender: string;
            token: string;
        }) => Promise<boolean>;
    };
}
```
