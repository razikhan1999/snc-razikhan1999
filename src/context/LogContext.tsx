import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
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
