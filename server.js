const express = require("express");

require('dotenv').config()

const { datastore_middleware } = require("./middleware");

const app = express();

app.use(express.json());

app.use(datastore_middleware);

const port = 3000;

//get the contact details
app.post("/getContact", async (req, res, next) => {
  try {
    let id = req.body.contact_id;
    let f_data = await fetch(
      `https://${process.env.DOMAIN}.myfreshworks.com/crm/sales/api/contacts/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token token=${process.env.API_KEY}`
        }
      }
    );
    let data = await f_data.json();
    console.log(data);
    if (data.error !== undefined||data.errors !== undefined) {
      res.status(400).json({"error":data?.error,"errors": data?.errors});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

// create a contact

app.post("/createContact", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { first_name, last_name, email, mobile_number } = req.body;

    const payload = {
      contact: {
        first_name: first_name,
        last_name: last_name,
        mobile_number: mobile_number,
        email: email,
      },
    };
    let f_data = await fetch(
      `https://${process.env.DOMAIN}.myfreshworks.com/crm/sales/api/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token token=${process.env.API_KEY}`
        },
        body: JSON.stringify(payload),
      }
    );
    let data = await f_data.json();
    console.log(data);
    if (data.error !== undefined ||data.errors !== undefined) {
      res.status(400).json({"error":data?.error,"errors": data?.errors});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

// update contact

app.post("/updateContact", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { contact_id, new_email, new_mobile_number } = req.body;

    const payload = {
      contact: {
        mobile_number: new_mobile_number,
        email: new_email,
      },
    };
    let f_data = await fetch(
      `https://${process.env.DOMAIN}.myfreshworks.com/crm/sales/api/contacts/${contact_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token token=${process.env.API_KEY}`
        },
        body: JSON.stringify(payload),
      }
    );
    console.log(f_data);
    let data = await f_data.json();
    console.log(data);
    if (data.error !== undefined || data.errors !== undefined) {
      res.status(400).json({"error":data?.error,"errors": data?.errors});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

// delete contact

app.post("/deleteContact", async (req, res, next) => {
  try {
    // console.log(req.body);
    const id = req.body.contact_id;

    let f_data = await fetch(
      `https://${process.env.DOMAIN}.myfreshworks.com/crm/sales/api/contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token token=${process.env.API_KEY}`
        },
      }
    );
    let data = await f_data.json();
    console.log(data);
    if (data !== true) {
      res.status(400).json({"message":"deletion unsuccessful"});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

//error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});


//${process.env.API_KEY}
//${process.env.DOMAIN}.myfreshworks.com/crm/sales
