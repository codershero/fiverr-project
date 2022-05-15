export default (req, res) => {
  const body = req.body;
  let formBody = {
    Name: `${body.fullName}`,
    Phone: `${body.phone}`,
    Email: `${body.email}`,
    Address: `${body.address}`,
  };

  async function contactAPI() {
    await fetch("https://hook.us1.make.com/r4f2rbdwljxyrf8bq8ehpx7irb2v62cz", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBody),
    })
      .then(response => {
        res.statusCode = 200;
        res.end(JSON.stringify(response));
        resolve();
      })
      .catch(err => console.log(err));
  }

  try {
    contactAPI();
  } catch (error) {
    // console.log(error);
    res.status(400).json({ status: "error" });
  }
};
