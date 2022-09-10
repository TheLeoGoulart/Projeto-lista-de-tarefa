/*
    Decorators podem ser utilizados em classes, propriedades, métodos, <parâmetros e Get_Set(POUCO USADO)>

    Usado para adicionar ou validar os recursos; 
    
    Target recebe o contructor da classe
    */


 //function logInfo(target: any){
 //   console.log("Servidor está online!");
 //}

 //Padrão decorator | factory
 /*function logInfo(mensagem: any){
    return (target: any) => {
        console.log(`${mensagem}, ${target}`)
    }
 }

 @logInfo("Servidor está online")
 class Sistema{

 }*/

 //============= PRATICANDO ==============

function setIpServidor(novoIp: string){
    return (target: any) =>{ // target é o construtor da classe
        return class extends target{
            ip = novoIp;
        }
    }
}

 @setIpServidor("192.168.50.30")
 class Servidor{

 }

 const servidor1 = new Servidor();

 console.log(servidor1);