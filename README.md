# ecoleta
![EColeta](http://diegoqueres.net/ti/github/ecoleta/tela_1.png)
Projeto **EColeta** *(coleta de resíduos)* desenvolvido durante a semana da **Next Level Week** *(organizada pela Rocketseat)*.



## Iniciando
Essas instruções fornecerão uma cópia do projeto para execução na sua máquina local, para fins de desenvolvimento. 



### Pré-requisitos
O que você já precisa ter instalado, antes de baixar esta aplicação:
- Node.js instalado.



### Instalando 
#### Camada da API Rest
A camada que fornece a API Rest se encontra na pasta server. 
Para seguir as próximas etapas, você precisa entrar nesta pasta via terminal.
```
cd <caminho do projeto no seu sistema>/server
```

##### Instalando dependências
```
npm install
```

##### Configurando o banco de dados
O banco de dados usado no ambiente de desenvolvimento é o **SQLite**. 
O projeto também foi adaptado e testado para funcionar com o **MySQL**. Dessa forma, o projeto têm compatibilidade com ambos, e pode ser adaptado para o ambiente de produção mais facilmente.
Para iniciar o banco de dados e fazer uma carga inicial, rode os seguintes comandos: 
```
npm run knex:migrate
npm run knex:seed
```

##### Rodando
```
npm run dev
```

#### Camada Web
![Tela de cadastro de ponto de coleta](http://diegoqueres.net/ti/github/ecoleta/tela_2.png)
Camada responsável pelo cadastro de novos pontos de coleta de resíduos. 
Para seguir as próximas etapas, você precisa entrar nesta pasta via terminal.
```
cd <caminho do projeto no seu sistema>/web
```

##### Instalando dependências
```
npm install
```

##### Rodando
```
npm start
```


#### Camada Mobile
Camada para atender o público que busca os pontos de coleta em sua região para descarte dos resíduos. 
Para seguir as próximas etapas, você precisa entrar nesta pasta via terminal.
```
cd <caminho do projeto no seu sistema>/mobile
```

##### Instalando o Expo CLI
Para testar o projeto rodando no seu aparelho celular, você precisará instalar o **Expo CLI**, com os seguintes comandos:
```
npm install -g expo-cli
```
Para solucionar problemas comuns com o **Expo CLI**, consulte: https://github.com/Rocketseat/expo-common-issues

##### Instalando fontes adicionais
O aplicativo utiliza algumas fontes do **Google**, como a *Roboto*. Para instalá-las no **Expo**, rode os seguintes comandos:
```
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

##### Instalando suporte a arquivos SVG
```
expo install react-native-svg
```

##### Instalando dependências
```
npm install
```

##### Rodando
O comando a seguir vai rodar a aplicação e abrir o **Expo CLI**, para testar o aplicativo no seu telefone celular:
```
npm start
```
Você deve então:
1. Instalar o aplicativo **Expo** no seu celular *(procure na Play Store ou App Store)*;
2. Capturar o QR Code pela câmera do celular, para abrir o aplicativo no telefone móvel;
3. Aguardar o carregamento da aplicação no telefone;
4. Conforme você altera e salva o código fonte, a aplicação será recarregada automaticamente.
