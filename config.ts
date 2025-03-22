import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient({ endpoint: "<Your-Endpoint>", key: "<Your-Key>" });
const database = client.database("<Your-Database-Name>");
const container = database.container("<Your-Container-Name>");

// Example query
async function queryItems() {
  const { resources } = await container.items.query("SELECT * FROM c").fetchAll();
  console.log(resources);
}

queryItems();