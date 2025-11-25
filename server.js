import app from "#app";
const init = () => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

init();
