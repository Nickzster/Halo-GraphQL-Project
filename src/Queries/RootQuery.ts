import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { CharacterSchema } from "../Schemas/Characters";
import { AssociationSchema } from "../Schemas/Associations";
import { TypeSchema } from "../Schemas/Types";
import { characters, associations, types } from "../Data";

//Queries will need some sort of resolving going on
export const RootQuerySchema = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    characters: {
      type: new GraphQLList(CharacterSchema),
      description: "List of all characters",
      resolve: () => characters,
    },
    associations: {
      type: new GraphQLList(AssociationSchema),
      description: "List of all character associations",
      resolve: () => associations,
    },
    types: {
      type: new GraphQLList(TypeSchema),
      description: "List of all character types",
      resolve: () => types,
    },
    character: {
      type: CharacterSchema,
      description: "An Individual Character",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parents, args) =>
        characters.find((character) => character.id === args.id),
    },
    association: {
      type: AssociationSchema,
      description: "An Individual association",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parents, args) =>
        associations.find((association) => association.id === args.id),
    },
    type: {
      type: TypeSchema,
      description: "An Individual character type",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parents, args) => types.find((type) => type.id === args.id),
    },
    characterAssociations: {
      type: GraphQLList(CharacterSchema),
      description: "Character Associations",
      args: {
        association: { type: GraphQLString },
      },
      resolve: (parents, args) =>
        characters.filter(
          (character) => character.association === args.association
        ),
    },
    characterType: {
      type: GraphQLList(CharacterSchema),
      description: "Character Types",
      args: {
        type: { type: GraphQLString },
      },
      resolve: (parents, args) =>
        characters.filter((character) => character.type === args.type),
    },
  }),
});
