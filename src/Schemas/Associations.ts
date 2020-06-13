import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from "graphql";

export const AssociationSchema = new GraphQLObjectType({
  name: "association",
  description:
    "Describes a character's association. Can be either human, covenant, or flood.",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});
