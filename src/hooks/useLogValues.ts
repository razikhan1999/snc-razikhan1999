import { useLogContext } from "@/context/LogContext";
import { User } from "@/utils/common/person";

/**
 * Logs the user and date details if logging is enabled.
 *
 * @param {Object} params - The parameters for the function.
 * @param {User} params.user - The user object.
 * @param {Date} params.date - The current date.
 * @return {void} This function does not return a value.
 */
export const useLogValues = ({ user, date }: { user: User; date: Date }) => {
  const { enableLogs } = useLogContext();

  if (enableLogs) {
    console.log(user, "person details");
    console.log(date, "current time");
  }
};
