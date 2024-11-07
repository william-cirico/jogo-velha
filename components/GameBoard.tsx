import { View, StyleSheet } from "react-native";
import { Square } from "./Square";

interface Props {
  board: string[];
  onPress: (index: number) => void;
  winningLine: number[];
}

export function GameBoard({ board, onPress, winningLine }: Props) {
  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onPress={() => onPress(index)}
          isWinningSquare={winningLine.includes(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    height: 300,
  },
});
