// Com type Alias é possível criar tipos mais poderosos que os iniciais

type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 1,
    nome:"Placa de Video",
    descricao:"RX 5500",
}

type Categoria = {
    slug: string;
    qtdProduto: number;
}

const categoria1: Categoria = {
    slug: "Hardware",
    qtdProduto: 10,
}

type ProdutoInfo = Info & Categoria; //ProdutoInfo é a junção dos 2 types anteriores

const novoProduto: ProdutoInfo = {
    id: 1,
    nome:"Placa de Video",
    descricao:"RX 5500",
    slug: "Hardware",
    qtdProduto: 10,
}

console.log(novoProduto);