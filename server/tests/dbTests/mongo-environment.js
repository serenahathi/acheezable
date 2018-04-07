class MongoEnvironment extends NodeEvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    console.log('Setup MongoDB Test ENV');

    this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString();
    this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;

    await super.setup();
  }

  async teardown() {
    console.log('Setup MongoDB Test ENV');

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}
