export const DBConfig = {
  name: 'Encounters',
  version: import.meta.env.VITE_INDEXEDDB_VERSION,
  objectStoresMeta: [
    {
      store: 'characters',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'pgName', keypath: 'pgName', options: { unique: false } },
        { name: 'pgClass', keypath: 'pgClass', options: { unique: false } },
        { name: 'pgLevel', keypath: 'pgLevel', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
      ],
    },
    {
      store: 'encounters',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'encName', keypath: 'encName', options: { unique: false } },
        {
          name: 'encPartecipants',
          keypath: 'encPartecipants',
          options: { unique: false },
        },
        { name: 'encDate', keypath: 'encDate', options: { unique: false } },
        { name: 'encState', keypath: 'encState', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
      ],
    },
    {
      store: 'monsters',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'monsName', keypath: 'monsName', options: { unique: false } },
        { name: 'monsGS', keypath: 'monsGS', options: { unique: false } },
        { name: 'monsAlign', keypath: 'monsAlign', options: { unique: false } },
        { name: 'userId', keypath: 'userId', options: { unique: false } },
      ],
    },
    {
      store: 'alignments',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'alignName', keypath: 'alignName', options: { unique: true } },
        {
          name: 'alignValue',
          keypath: 'alignValue',
          options: { unique: true },
        },
      ],
    },
    {
      store: 'pgClasses',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'className', keypath: 'className', options: { unique: true } },
        { name: 'classValue', keypath: 'classValue', options: { unique: true } },
      ],
    },
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [{ name: 'name', keypath: 'name', options: { unique: true } }],
    },
  ],
};
