const MONDAY_KEY = process.env.MONDAY_KEY;

export default (req, res) => {
  const body = req.body;
  let formBody = {
    Name: `${body.name}`,
    Email: `${body.email}`,
    Phone: `${body.phoneNumber}`,
    TypeOfJob: `${body.typeOfJob}`,
    Address: `${body.address}`,
    Message: `${body.msg}`,
  };

  async function contactAPI() {
    await fetch("https://hook.us1.make.com/48smasmsewdoaxqsmcgn8dltsrr4g9eh", {
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
