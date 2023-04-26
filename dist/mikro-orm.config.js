"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const config = {
    migrations: {
        path: './migrations',
        glob: '!(*.d).{js,ts}',
    },
    entities: [Post_1.Post],
    dbName: 'test',
    type: 'postgresql',
    debug: true,
    user: 'monika'
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map