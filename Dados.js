import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Pecas } from './Images';

export const Dados = () => {
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');

  const handleImageClick = (peca) => {
    setDescricao(Pecas[peca].desc);
    setNome(Pecas[peca].imgName);
  };

  const pecasArray = Object.keys(Pecas).map((peca) => ({
    nome: peca,
    uri: Pecas[peca].uri,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Descrição da Peça:</Text>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <View style={styles.imagensContainer}>
        {pecasArray.map((peca, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(peca.nome)}>
            <Image style={styles.imagem} source={peca.uri} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  imagensContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
