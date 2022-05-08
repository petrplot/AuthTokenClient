import React, {FC} from "react";
import ContactList from "../components/ContactList";

const Main: FC = () => {
  console.log("rendr main");
  return (
    <div>
      <ContactList />
    </div>
  );
};

export default Main;
