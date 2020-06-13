import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export const TypeSchema = new GraphQLObjectType({
  name: "type",
  description: "What type is the character? Can be either a hero or a villain.",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});
