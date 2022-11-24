import { ComponentProps, FC, ReactNode } from "react";

// interface IChildren {
//   children: any;
// }

// export const combineComponents = (...components: FC[]): FC => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       return ({ children }: ComponentProps<FC>): JSX.Element => {
//         return (
//           <AccumulatedComponents>
//             <CurrentComponent>{children}</CurrentComponent>
//           </AccumulatedComponents>
//         );
//       };
//     },
//     ({ children }: any) => <>{children}</>,
//   );
// };

// const providers = [ContextProvider1, ContextProvider2, ContextProvider3, ContextProvider4];
// export const AppContextProvider = combineComponents(...providers);
