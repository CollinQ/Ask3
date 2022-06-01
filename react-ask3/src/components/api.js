export const getComments = async () => {
  return [
    {
      id: "1",
      body: "What is pi?",
      username: "Jeff",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
      username: "Jeffrey",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-18T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "It is 3.14",
      username: "Collin",
      userId: "2",
      parentId: "1",
      createdAt: "2022-05-18T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "As much wood as a woodchuck could chuck, if a woodchuck could chuck wood.",
      username: "Clifford",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-19T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Jeff",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
