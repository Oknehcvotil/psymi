import { Button } from './MainButton.styled';

const MainButton = ({ name, path, children }) => {
  return (
    <Button className={name} to={path}>
      {children}
    </Button>
  );
};

export default MainButton;
