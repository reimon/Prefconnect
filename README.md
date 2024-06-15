# PrefConnect

## Visão Geral

PrefConnect é um projeto que consiste em um site e um aplicativo mobile que permite aos usuários criar e reportar eventos em um mapa. Esses eventos são categorizados em diferentes tipos de problemas urbanos, como queda de árvore, buraco na rua, esgoto a céu aberto, enchente, falta de energia e falta de água. O objetivo principal do projeto é facilitar a comunicação entre os cidadãos e as autoridades competentes, permitindo uma resposta rápida e eficaz para resolver esses problemas.

## Objetivos do Projeto

- Proporcionar uma plataforma intuitiva e acessível para os cidadãos reportarem problemas urbanos.
- Facilitar a visualização e o gerenciamento de eventos reportados por meio de um mapa interativo.
- Categorizar os eventos de forma clara para ajudar na priorização e na resposta das autoridades.
- Integrar diferentes meios de comunicação (web e mobile) para maximizar o alcance e a usabilidade.

## Funcionalidades

1. **Criação de Eventos:**

   - Os usuários podem criar eventos selecionando um local no mapa.
   - Escolha de categorias predefinidas para os eventos: queda de árvore, buraco na rua, esgoto a céu aberto, enchente, falta de energia, falta de água.
   - Descrição detalhada do evento e upload de imagens.
   - Mapa interativo com a localização de eventos.
   - Visualização detalhada dos eventos com informações como endereço, descrição e fotos.
   - Opções de navegação para o local do evento.
   - Sistema de feedback e avaliação de serviços.
   - Contato direto com a prefeitura ou serviço responsável.
   - Filtros para buscar eventos por categoria (queda de árvore, buraco na rua, etc.).

2. **Mapa Interativo:**

   - Exibição de eventos reportados em um mapa interativo.
   - Filtros para visualizar eventos por categoria ou status.

3. **Listagem de Eventos:**

   - Lista de eventos reportados, com detalhes como localização, categoria e status.
   - Opção de pesquisar e filtrar eventos específicos.

4. **Notificações:**

   - Notificações push para informar os usuários sobre atualizações de eventos que eles reportaram ou estão próximos a eles.

5. **Painel Administrativo:**
   - Interface para as autoridades competentes gerenciarem e atualizarem o status dos eventos reportados.
   - Ferramentas de análise para monitorar a frequência e a localização dos problemas reportados.

## Estrutura do Aplicativo

### Telas Principais

1. **Tela Inicial (Home)**: Mostra um mapa interativo com a localização dos eventos.
2. **Detalhes do Evento**: Exibe informações detalhadas do evento selecionado.
3. **Navegação**: Fornece direções para chegar ao local do evento.
4. **Feedback**: Permite aos usuários enviar feedback ou avaliações.
5. **Configurações**: Opções de perfil, notificações, etc.

## Design da Interface

### Componentes Visuais

1. **Mapa Interativo**: Exibe pinos ou marcadores para cada evento.
2. **Cartões de Evento**: Aparecem ao clicar em um marcador no mapa, mostrando detalhes breves.
3. **Detalhes do Evento**: Tela com fotos, descrição, e opções de ação (navegar, ligar, etc.).
4. **Navegação**: Mapa com rota traçada até o evento.

## Tecnologias Utilizadas

- **Frontend Web:** React.js
- **Mobile:** React Native
- **Backend:** Node.js com Express.js
- **Banco de Dados:** MongoDB
- **Autenticação:** JWT (JSON Web Tokens)
- **Mapas:** API do Google Maps ou Mapbox
- **Hospedagem:** AWS ou outra solução de nuvem

## Estrutura do Projeto

```markdown
prefconnect/
├── backend/
│ ├── src/
│ ├── tests/
│ ├── package.json
│ └── ...
├── web/
│ ├── src/
│ ├── public/
│ ├── tests/
│ ├── package.json
│ └── ...
├── mobile/
│ ├── src/
│ ├── tests/
│ ├── package.json
│ └── ...
├── shared/
│ ├── utils/
│ ├── components/
│ └── ...
├── .gitignore
├── README.md
└── package.json
```

## Instalação e Configuração

### Clonar o Repositório

```sh
git clone https://github.com/reimon/prefconnect
cd prefconnect
```

```sh
yarn install
```

Instalar Dependências

```sh
yarn install
```

Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as variáveis necessárias (exemplo: API keys, configurações de banco de dados).

Rodar o Projeto

Backend:

```sh
yarn workspace backend start
```

Web:

```sh
yarn workspace web start
```

Mobile:

```sh
npx expo start
```

Contribuição
Issues e Bugs: Utilize o GitHub Issues para reportar bugs ou sugerir melhorias.
Pull Requests: Envie pull requests para adicionar novas funcionalidades ou corrigir problemas.
