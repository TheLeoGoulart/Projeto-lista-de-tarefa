/*
    Supondo um jogo e suas dlc's
*/

interface IjogoProps{
    readonly id: string;
    nome: string;
    genero: string;
    plataforma: string[]
}

const rainbowSix: IjogoProps = {
    id: "1234",
    nome: "Rainbow Six - Siege",
    genero: "Tiro/Multiplayer",
    plataforma: ["PS5", "PC", "XboxSeriesX"],
}

interface ItemporadaProps extends IjogoProps{
    base: IjogoProps;
    skins: string[];
    emotes: string[];
}

const rainbowSixNovatemp: ItemporadaProps = {
    base: rainbowSix,
    id: "1234-1",
    nome: "Rainbow Six - Temporada 10",
    genero: "Ação/Multiplayer",
    plataforma: ["PS5", "PC", "XboxSeriesX"],
    skins: ["Rengoku", "Tango"],
    emotes: ["Floss", "Robo"],
}

console.log(rainbowSixNovatemp);