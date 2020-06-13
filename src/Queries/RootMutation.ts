import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { CharacterSchema } from "../Schemas/Characters";
import { characters } from "../Data";

export const RootMutationSchema = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addCharacter: {
      type: CharacterSchema,
      description: "Add a new character to the list!",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        association: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const character = {
          id: characters.length + 1,
          name: args.name,
          association: args.association,
          type: args.type,
        };
        characters.push(character);
        return character;
      },
    },
    modifyCharacter: {
      type: CharacterSchema,
      description: "Modify a trait about the character.",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        association: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const character = characters.find(
          (character) => character.name === args.name
        );
        if (!character) return;
        const modifiedCharacter = {
          id: character.id,
          name:
            args.name !== null
              ? args.name !== character.name
                ? args.name
                : character.name
              : character.name,
          association:
            args.association !== null
              ? args.association !== character.association
                ? args.association
                : character.association
              : character.association,
          type:
            args.type !== null
              ? args.type !== character.type
                ? args.type
                : character.type
              : character.type,
        };
        //fix logic that splices out old character
        let newCharacters = characters.filter(
          (selectedCharacter) => selectedCharacter.id !== character.id
        );
        newCharacters.push(modifiedCharacter);
        // characters = newCharacters;
        return character;
      },
    },
  }),
});
