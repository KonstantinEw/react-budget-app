import { createContext } from "react";

export const AppContext = createContext<null>(null);

interface IProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

export const AppContextProvider = (props: IProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((accumulatedComponents, Components) => {
        return <Components>{accumulatedComponents}</Components>;
      }, children)}
    </>
  );
};
