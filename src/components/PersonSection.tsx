import { usePerson } from "@/hooks/usePerson";
import { Person } from "@/utils/common/person";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import PersonCard from "./PersonCard";

const PersonSection = () => {
  const [activePerson, setActivePerson] = useState<Person | "">("");

  const { mutate, data } = usePerson();

  useEffect(() => {
    if (activePerson) {
      mutate(activePerson);
    }
  }, [activePerson, mutate]);

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
      {data && <PersonCard user={data} />}
    </>
  );
};

export default PersonSection;
