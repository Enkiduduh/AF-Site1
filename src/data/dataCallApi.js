import mockdata from "/users.json";

async function getMockData(id) {
  const userId = parseInt(id);
  const userData = mockdata.find((user) => user.id === userId);

  return { userData };
}

export { getMockData }
