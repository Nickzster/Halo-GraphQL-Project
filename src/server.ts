import express from "express";
import expressGraphQL from "express-graphql";
import { GraphQLSchema } from "graphql";
import { RootQuerySchema } from "./Queries/RootQuery";
import { RootMutationSchema } from "./Queries/RootMutation";

const app = express();

const schema = new GraphQLSchema({
  query: RootQuerySchema,
  mutation: RootMutationSchema,
});

app.use("/test", (req, res) => {
  res.send("Hello!");
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server started on port 5000!"));
