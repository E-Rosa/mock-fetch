export type MockFetchOptions = {
    fetchTimeoutMs?: number;
};
export declare class MockFetch {
    static fetch(callback: () => MockResponse, options?: MockFetchOptions): Promise<MockResponse>;
}
export declare class MockResponse {
    body: MockBody;
    status: number;
    constructor(opts: {
        body: MockBody;
        status: number;
    });
    json(): any;
}
export declare class MockBody {
    data: string;
    constructor(data: unknown);
}
export type FetchResponse = {
    body: {
        data: unknown;
        json: () => Promise<unknown>;
    };
    status: number;
};
