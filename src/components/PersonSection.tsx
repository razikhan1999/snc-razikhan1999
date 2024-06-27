import { Person } from "@/utils/common/person";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "./Button";

const PersonSection = () => {
  const [activePerson, setActivePerson] = useState<Person | "">("");

  return (
    <>
      <div className={classNames("flex gap-2")}>
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            active={activePerson === person}
            onClick={() => setActivePerson(person)}
          >
            {person}
          </Button>
        ))}

        <button />
      </div>
    </>
  );
};

export default PersonSection;
