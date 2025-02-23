export type MockFetchOptions = {
  fetchTimeoutMs?: number;
};

export class MockFetch {
  static fetch(
    callback: () => MockResponse,
    options?: MockFetchOptions
  ): Promise<MockResponse> {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve(callback());
        },
        options?.fetchTimeoutMs ? options.fetchTimeoutMs : 1000
      );
    });
  }
}

export class MockResponse {
  body: MockBody;
  status: number;

  constructor(opts: { body: MockBody; status: number }) {
    this.body = opts.body;
    this.status = opts.status;
  }

  json() {
    if (typeof this.body.data != "string") {
      throw new Error(
        `Expected string, received ${typeof this.body.data} instead.`
      );
    }
    return JSON.parse(this.body.data as string);
  }
}

export class MockBody {
  data: string;

  constructor(data: unknown) {
    this.data = JSON.stringify(data);
  }
}

export type FetchResponse = {
  body: {
    data: unknown;
    json: () => Promise<unknown>;
  };
  status: number;
};
