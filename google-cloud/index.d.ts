// Type definitions for Google Cloud Node.js Client v0.45.0
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node, https://www.npmjs.com/package/google-cloud
// Definitions by: Michael Prentice https://github.com/Splaktar, Chad Brockman <https://github.com/chadbr/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'google-cloud' {
    import { Readable, Writable } from 'stream';
    class Storage {
        bucket(name: string): StorageBucket;
    }
    class StorageBucket {
        file(name: string): StorageFile;
        getFiles(options: Object, callback: Function): void;
    }
    class StorageFile {
        createReadStream(): Readable;
        createWriteStream(options: any): Writable;
        delete(callback: Function): void;
    }
    class PubSub {
        topic(name: string): Topic;
        subscription(name: string): any;
        createTopic(name: string, callback: Function): void;
        getTopics(callback: Function): void;
    }
    class Topic {
        publish(message: Object, callback: Function): void;
        subscribe(subscriptionName: string, options: Object, callback: Function): void;
        delete(callback: Function): void;
    }
    class Subscription {
        pull(options: Object, callback: Function): void;
        on(listenerType: string, callback: Function): void;
        removeListener(listenerType: string, Function): void;
    }
    class BigQuery {
        createDataset(id: string, callback: Function): void;
        dataset(id: string): Dataset;
        getDatasets(query: Object, callback: Function): void;
    }
    class Dataset {
        table(id: string): Table;
        exists(callback: Function): void;
        create(callback: Function): void;
    }
    class Table {
        insert(rows: Object, options: Object, callback: Function): void;
    }
    class GCloud {
        storage(options: any): Storage;
    }
    function gcloud(options: any): GCloud;
    function bigquery(options?: any): BigQuery;
    function storage(options?: any): Storage;
    function pubsub(options?: any): PubSub;
}
