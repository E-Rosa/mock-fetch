export class MockFetch {
    static fetch(callback, options) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(callback());
            }, (options === null || options === void 0 ? void 0 : options.fetchTimeoutMs) ? options.fetchTimeoutMs : 1000);
        });
    }
}
export class MockResponse {
    constructor(opts) {
        this.body = opts.body;
        this.status = opts.status;
    }
    json() {
        if (typeof this.body.data != "string") {
            throw new Error(`Expected string, received ${typeof this.body.data} instead.`);
        }
        return JSON.parse(this.body.data);
    }
}
export class MockBody {
    constructor(data) {
        this.data = JSON.stringify(data);
    }
}
