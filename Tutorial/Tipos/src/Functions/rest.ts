//function totalVendas(venda1:number, venda2:number, venda3:number, venda4:number): number{
//    const total = venda1 + venda2 + venda3 + venda4;

//    console.log(total);

//    return total;
//}

//totalVendas(10, 20, 30, 40);

function totalVendas(...vendas: number[]): void{
    const qtdVendas = vendas.length;

    console.log(`Você fez ${qtdVendas} vendas hoje!`);
}

totalVendas(10, 20, 30);

function mostraNomes(...nomes: string[]){
    let totalnomes = nomes.length;
    console.log(totalnomes)
    
    nomes.map( nome => {
        console.log(nome);
    })
}

mostraNomes("Leonardo", "Pereira", "Bruno");