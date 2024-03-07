import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
const MainProvider: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};
export default MainProvider;
