import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar img="https://media.licdn.com/dms/image/v2/C4E03AQE9MKMgOPt9WQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1654123693448?e=1732147200&v=beta&t=bAzoOX32JJkfq42hxy7a39D2qlK1DOs6_jV8bYugNXw" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
