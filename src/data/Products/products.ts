export interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const products: Produto[] = [
  {
    nome: "Processador AMD Ryzen ",
    descricao: "6 núcleos, 12 threads, ideal para gamers e criadores de conteúdo.",
    preco: 1049.90,
    imagem: "/img/ryzen.png",
  },
  {
    nome: "Headset Gamer",
    descricao: "Som surround 7.1, microfone removível e almofadas confortáveis.",
    preco: 599.90,
    imagem: "/img/headset.png",
  },
  {
    nome: "Console PlayStation 4 1TB",
    descricao: "Inclui controle DualShock 4, compatível com jogos exclusivos incríveis.",
    preco: 2399.90,
    imagem: "/img/ps4.png",
  },
  {
    nome: "Monitor Gamer 27” 165Hz",
    descricao: "Alta taxa de atualização e resolução Full HD para gameplay fluido.",
    preco: 1299.90,
    imagem: "/img/monitor.png",
  },
  {
    nome: "Gabinete Gamer Torre RGB",
    descricao: "Visual moderno com painel em vidro temperado e iluminação RGB.",
    preco: 499.90,
    imagem: "/img/gabinete.png",
  },
  {
    nome: "Controle ps4 dualshock",
    descricao: "Conectividade sem fio com ergonomia e precisão excepcionais.",
    preco: 369.90,
    imagem: "/img/controle.png",
  },
  {
    nome: "PC Gamer Completo AMD Ryzen",
    descricao: "Setup completo com gabinete, placa de vídeo e monitor inclusos.",
    preco: 4999.90,
    imagem: "/img/pcfull.png",
  },
  {
    nome: "Óculos de Realidade Virtual VR",
    descricao: "Compatível com smartphones, proporciona imersão total em 3D.",
    preco: 199.90,
    imagem: "/img/vr.png",
  },
  {
    nome: "Teclado Mecânico RGB ASUS gamer",
    descricao: "Switches Outemu Blue e iluminação RGB em um corpo compacto.",
    preco: 249.90,
    imagem: "/img/teclado.png",
  },
  {
    nome: "Mouse Gamer ASUS",
    descricao: "Sensor de alta precisão com RGB personalizável.",
    preco: 179.90,
    imagem: "/img/mouse.png",
  },
];

export default products;
