import { Button } from "react-native";

interface Props {
  onRestart: () => void;
}

export function RestartButton({ onRestart }: Props) {
  return <Button title="Reiniciar Jogo" onPress={onRestart} color="#841584" />;
}
