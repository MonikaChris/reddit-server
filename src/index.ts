import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  const ormFork = orm.em.fork();

// const post = ormFork.create(Post, {title: 'my first post'});
// await ormFork.persistAndFlush(post);
// console.log("------------ sql 2 -----------");
// await orm.em.nativeInsert(Post, {title: "my first post 2"});

const query = await ormFork.find(Post, {});

};

main().catch((err) => {
  console.error(err);
});
