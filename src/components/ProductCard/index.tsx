type ProductProps = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

export default function ProductCard({ nome, descricao, preco, imagem }: ProductProps) {
  return (
    <div className="flex flex-col items-center justify-between border border-[#6A0DAD] rounded-2xl p-4 shadow-xl hover:shadow-2xl transition duration-200 cursor-pointer h-[420px] bg-[#14151f]">
      <div className="w-full h-48 flex items-center justify-center mb-4 bg-[#1E2231] rounded-lg shadow-md">
        <img
          src={imagem}
          alt={nome}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h2 className="text-lg font-bold text-[#E9ECEF] text-center">{nome}</h2>
      <p className="text-sm text-[#E9ECEF] text-center mt-1">{descricao}</p>
      <p className="mt-3 text-[#32CD32] font-semibold text-center text-base">
        R$ {preco.toFixed(2)}
      </p>
    </div>
  );
}
