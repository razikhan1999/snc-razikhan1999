import { usePerson } from "@/hooks/usePerson";
import { Person } from "@/utils/common/person";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import PersonCard from "./PersonCard";
import PersonCardSkeleton from "./PersonCardSkeleton";

const PersonSection = () => {
  const [activePerson, setActivePerson] = useState<Person | "">("");

  const { mutate, isPending, data, isError } = usePerson();

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
      {isPending && <PersonCardSkeleton />}
      {data && <PersonCard user={data} />}
      {isError && (
        <div className="flex items-center flex-col gap-3 text-red-400 p-6 justify-center border-2 border-blue-300 rounded">
          <p>Error while fetching information</p>
          <button
            className="border-2 rounded-2xl text-white border-blue-300 px-4 py-2"
            onClick={() => {
              if (activePerson) mutate(activePerson);
            }}
          >
            Try again
          </button>
        </div>
      )}
    </>
  );
};

export default PersonSection;
