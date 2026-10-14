import Pocketbase from 'pocketbase';

const POCKETBASE_API_URL = '/hcgi/platform';

// Lazily create a singleton to avoid SSR issues (PocketBase accesses `window`
// in some versions when constructed).
let _client;

function getClient() {
    if (!_client) {
        _client = new Pocketbase(POCKETBASE_API_URL);
    }
    return _client;
}

const pb = typeof window !== 'undefined' ? getClient() : {
    authStore: { record: null, isValid: false, onChange: () => () => {}, clear: () => {} },
    collection: () => ({ authWithPassword: async () => {}, create: async () => {} }),
};

export default pb;
export { pb as pocketbaseClient };
