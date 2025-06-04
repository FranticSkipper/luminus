import Button from "@shared/ui/Button/Button";

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
  return <Button onClick={onClick}>Login</Button>;
};
