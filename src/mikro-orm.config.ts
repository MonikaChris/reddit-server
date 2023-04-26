import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
// import path from "path";
import { Options } from "@mikro-orm/core";

  const config: Options = {
    migrations: {
        path: './migrations', // path to the folder with migrations
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    },
    entities: [Post],
    dbName: 'test',
    type: 'postgresql',
    debug: true,
    user: 'monika'
};

export default config;