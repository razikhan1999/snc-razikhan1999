import { Person } from "@/utils/common/person";
import { useMutation } from "@tanstack/react-query";

/**
 * A custom hook that provides a mutation function for fetching person data from the API.
 *
 * @return {Mutation} The mutation object returned by the `useMutation` hook.
 */
export const usePerson = () => {
  const mutation = useMutation({
    mutationFn: async (person: Person) => {
      const res = await fetch(`/api/person?person=${person}`);
      const data = await res.json();
      return data;
    },
  });

  return mutation;
};
