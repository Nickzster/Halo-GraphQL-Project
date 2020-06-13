import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";

import { characters } from "../Data";

/* 
Notes
It appears that fields are similar to a Mongoose model... Define them, and their types and other properties.
The resolve field appears to perform database logic.
*/
export const CharacterSchema = new GraphQLObjectType({
  name: "Character",
  description: "This represents a character within the Halo Canon",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    association: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});
