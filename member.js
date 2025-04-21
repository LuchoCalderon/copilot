function skillsMember() {
  return {
    name: "skillsMember",
    description: "A member of the skills team",
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The unique identifier for the member",
      },
      name: {
        type: "string",
        description: "The name of the member",
      },
      role: {
        type: "string",
        description: "The role of the member in the skills team",
      },
    },
  };
}