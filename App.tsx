// App.js
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { GameBoard } from './components/GameBoard';
import { RestartButton } from './components/RestartButton';

function Game() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState("");
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const handlePress = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board: string[]) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningLine(combination);
        Alert.alert('Fim de Jogo', `O jogador ${board[a]} venceu!`);
        return;
      }
    }

    if (board.every(cell => cell)) {
      setWinner('Empate');
      Alert.alert('Empate', 'O jogo terminou em empate.');
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
    setWinner("");
    setWinningLine([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <GameBoard board={board} onPress={handlePress} winningLine={winningLine} />
      <Text style={styles.turnText}>
        {winner ? `Resultado: ${winner === 'Empate' ? 'Empate' : `Jogador ${winner} venceu`}` : `Vez do Jogador: ${isXNext ? 'X' : 'O'}`}
      </Text>
      <RestartButton onRestart={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  turnText: {
    marginTop: 20,
    fontSize: 24,
  },
});

export default Game;