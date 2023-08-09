const statusError = (res, statusCode, message, error) => {
  console.error(`${message}: ${error}`);
  return res.status(statusCode).json({ message });
};

export default statusError
