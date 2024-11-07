import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface Props {
  value: string;
  onPress: () => void;
  isWinningSquare: boolean;
}

export function Square({ value, onPress, isWinningSquare }: Props) {
  return (
    <TouchableOpacity
      style={[styles.square, isWinningSquare && styles.winningSquare]}
      onPress={onPress}
    >
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  winningSquare: {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
  },
});
