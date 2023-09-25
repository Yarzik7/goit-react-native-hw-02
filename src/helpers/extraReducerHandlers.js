const handleRejected = (_, { payload }) => {
  console.log(payload.message);
};

export { handleRejected };
