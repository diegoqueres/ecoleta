import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import RNPickerSelect, { Item } from 'react-native-picker-select';

interface IBGEUFs {
  id: number;
  sigla: string;
  nome: string;
}

interface IBGECities {
  id: number;
  nome: string;
}

const Home = () => {
  const [isBusy, setBusy] = useState(true);
  const [ufs, setUfs] = useState<IBGEUFs[]>([]);
  const [cities, setCities] = useState<IBGECities[]>([]);
  const [comboUFs, setComboUFs] = useState<Item[]>([]);
  const [comboCities, setComboCities] = useState<Item[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    setBusy(true);
    async function fetchData() {
    	api
      	.get<IBGEUFs[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderby=nome')
      	.then(response => {
        	setUfs(response.data);
        	setComboUFs(ufs.map((uf) => {
          		return { key: uf.id, label: uf.nome, value: uf.sigla };
        	}));
      	});
    	loadCities();
    }
    fetchData();
    setBusy(false);
  }, []);

  function loadCities() {
    if (selectedUf === '0') return;
    setBusy(true);
    async function fetchData() {
    	api
    	.get<IBGECities[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderby=nome`)
    	.then(response => {
        	setCities(response.data);
        	setComboCities(cities.map((city) => {
        		return { key: city.id, label: city.nome, value: city.nome };
        	}));
    	});
    }
    fetchData();
    setBusy(false);    
  }

  const navigation = useNavigation();

  function changeUF(value: string) {
    setSelectedUf(value);
    loadCities();
  }

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      selectedUf,
      selectedCity
    });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }} >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resídulos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
          </View>
        </View>

        {isBusy ? (
        	<Text style={styles.description}>Carregando as opções...</Text>
        ) : (
        	<View style={styles.footer}>
          	<RNPickerSelect
            	onValueChange={(value) => changeUF((value === null ? '0' : value))}
            	placeholder={{ label: 'Selecione um estado', value: null }}
            	items={comboUFs}
          	/>
          	<RNPickerSelect
            	onValueChange={(value) => {setSelectedCity((value === null ? '0' : value))}}
            	placeholder={{ label: 'Selecione uma cidade', value: null }}
            	items={comboCities}
          	/>
          	<RectButton style={styles.button} onPress={handleNavigateToPoints}>
            	<View style={styles.buttonIcon}>
              	<Text>
                	<Icon name="arrow-right" color="#fff" size={24} />
              	</Text>
            	</View>
            	<Text style={styles.buttonText}>
              	Entrar
          	</Text>
          	</RectButton>
        	</View>
        )}

      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;
