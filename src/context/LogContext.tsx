import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type LogContextProps = {
  enableLogs: boolean;
  toggleLogging: () => void;
};

const LogContext = createContext<LogContextProps | undefined>(undefined);

/**
 * Renders a LogContextProvider component.
 *
 * @param {PropsWithChildren} props - The properties for the component.
 * @param {ReactNode} props.children - The child components.
 * @return {ReactElement} The rendered LogContextProvider component.
 */
export const LogContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const toggleLogging = () => setEnableLogs((prevState) => !prevState);

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogging }}>
      {children}
    </LogContext.Provider>
  );
};

/**
 * Returns the value of the LogContext using the useContext hook. Throws an error if
 * the LogContext is not provided.
 *
 * @return {LogContextProps | undefined} The value of the LogContext.
 * @throws {Error} Throws an error if the LogContext is not provided.
 */
export const useLogContext = () => {
  const logContext = useContext(LogContext);
  if (!logContext) {
    throw new Error("Please provide values to log provider");
  }
  return logContext;
};
