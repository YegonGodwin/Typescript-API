"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cosmos_1 = require("@azure/cosmos");
const client = new cosmos_1.CosmosClient({ endpoint: "<Your-Endpoint>", key: "<Your-Key>" });
const database = client.database("<Your-Database-Name>");
const container = database.container("<Your-Container-Name>");
// Example query
function queryItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const { resources } = yield container.items.query("SELECT * FROM c").fetchAll();
        console.log(resources);
    });
}
queryItems();
