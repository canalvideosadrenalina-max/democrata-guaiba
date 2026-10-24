export const party = {
  name: "Democrata",
  shortName: "Democrata",
  number: "35",
  city: "Guaíba",
  state: "RS",
  president: "Dr. Heitor de Abreu Oliveira",
  role: "Presidente Municipal",
  cnpj: "30.862.762/0001-68",
  address: "Av. Sete de Setembro, 583 · Centro",
  cep: "92704-030",
} as const;

export const nav = [
  { href: "#inicio", id: "inicio", label: "Início" },
  { href: "#guaiba", id: "guaiba", label: "Guaíba" },
  { href: "#partido", id: "partido", label: "O Partido" },
  { href: "#valores", id: "valores", label: "Valores" },
  { href: "#lideranca", id: "lideranca", label: "Liderança" },
  { href: "#filiacao", id: "filiacao", label: "Filie-se" },
] as const;

export const heroFacts = [
  { label: "Emancipação", value: "14 out 1926" },
  { label: "Censo IBGE", value: "92.924 hab." },
  { label: "Nas urnas", value: "Número 35" },
  { label: "Diretório", value: "Guaíba/RS" },
] as const;

export const landmarks = [
  {
    kicker: "A paisagem",
    title: "Orla do Guaíba",
    text: "Calçadão, píer e o fim de tarde em que Porto Alegre se desenha do outro lado da água. O Parque da Juventude prolonga a orla como área de esporte, chimarrão e encontro.",
  },
  {
    kicker: "1835",
    title: "Casa de Gomes Jardim",
    text: "Na noite de 19 para 20 de setembro de 1835, sob o cipreste histórico, acertou-se a travessia da Praia da Alegria. Gomes Jardim partiu com cerca de 60 homens para encontrar Onofre Pires na outra margem.",
  },
  {
    kicker: "14 de outubro",
    title: "Escadaria da emancipação",
    text: "Quase 150 degraus ligam a memória de 1926 a um mirante sobre o lago. A escadaria é o aniversário da cidade transformado em caminho.",
  },
  {
    kicker: "A origem",
    title: "Pedras Brancas",
    text: "Antes de se chamar Guaíba, o povoado era ponto de tropas, charqueadas e travessia. Os matacões de granito do Escudo Sul-rio-grandense deram o primeiro nome ao lugar.",
  },
  {
    kicker: "2024",
    title: "A cheia e a cidade",
    text: "A enchente histórica testou a orla, os bairros e a Região Metropolitana. Planejamento, infraestrutura e solidariedade passaram a fazer parte obrigatória da conversa pública.",
  },
] as const;

export const timeline = [
  {
    year: "2008",
    title: "Nasce o PMB",
    text: "Suêd Haidar funda o Partido da Mulher Brasileira. O propósito é ampliar a representação das mulheres na política e na sociedade.",
  },
  {
    year: "29 set 2015",
    title: "Registro no TSE",
    text: "O Tribunal Superior Eleitoral defere o registro definitivo do partido. A legenda recebe o número 35, que segue sendo o número de urna.",
  },
  {
    year: "dez 2025",
    title: "O nome Democrata",
    text: "O TSE aprova a mudança de nome. O Partido da Mulher Brasileira passa a se chamar Democrata. A sigla muda; o número 35 permanece.",
  },
  {
    year: "Hoje",
    title: "Presidência nacional",
    text: "Suêd Haidar preside o Democrata. Em Guaíba, o diretório municipal leva o 35 ao bairro, à orla e à rotina da cidade.",
  },
] as const;

export const achievements = [
  {
    place: "Origem",
    title: "Representação como ponto de partida",
    text: "O partido foi criado para ampliar a presença das mulheres no Congresso e nos espaços de decisão. Esse propósito continua no Democrata.",
  },
  {
    place: "Instituições",
    title: "Nome novo, mesma legenda",
    text: "A mudança de 2025 passou pelo TSE. O diretório municipal repete essa lógica em escala local: estatuto, regra clara e filiação consciente.",
  },
  {
    place: "Guaíba",
    title: "Presença com endereço",
    text: "O diretório existe para que o 35 chegue ao bairro, à orla e à conversa pública da cidade.",
  },
] as const;

export const values = [
  {
    index: "01",
    title: "Representatividade",
    text: "Mais mulheres e mais vozes nos espaços de decisão. Em Guaíba, representação se mede pela presença no bairro, não pelo anúncio.",
    icon: "representation",
  },
  {
    index: "02",
    title: "Democracia",
    text: "Respeito ao voto, às instituições e ao debate público. Política com regra, transparência e espaço para a divergência.",
    icon: "democracy",
  },
  {
    index: "03",
    title: "Progressismo",
    text: "Avançar sem apagar a memória da cidade. Guaíba pode mudar de frente para o lago e com os pés na própria história.",
    icon: "progress",
  },
  {
    index: "04",
    title: "Direitos humanos",
    text: "A dignidade de cada pessoa como limite da ação pública. Cuidado, escuta e igualdade de tratamento no dia a dia do município.",
    icon: "rights",
  },
  {
    index: "05",
    title: "Meio ambiente",
    text: "O lago, a orla e os bairros são o território. Cuidar da água e da paisagem faz parte do compromisso cívico.",
    icon: "environment",
  },
  {
    index: "06",
    title: "Igualdade",
    text: "A mesma regra para todos. O diretório defende oportunidades iguais na escola, no trabalho e na vida pública de Guaíba.",
    icon: "equality",
  },
] as const;

export type ValueIcon = (typeof values)[number]["icon"];

export const leadershipNotes = [
  {
    label: "Advocacia",
    text: "O ofício jurídico informa o respeito ao procedimento, à palavra empenhada e a quem precisa ser ouvido.",
  },
  {
    label: "Comunidade",
    text: "A liderança se aproxima de bairros, associações e famílias — o território onde uma legenda municipal se prova.",
  },
  {
    label: "Diretório",
    text: "A presidência conduz o Democrata em Guaíba com sobriedade: menos anúncio, mais presença.",
  },
] as const;
