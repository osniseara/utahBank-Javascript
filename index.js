import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente = new Cliente();

cliente.nome = "Ricardo";
cliente.cpf = "222222222";

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.cliente = cliente;
ContaCorrenteRicardo.agencia = 2834;
ContaCorrenteRicardo.depositar(250);

const cliente1 = new Cliente();
cliente1.nome= "Alice Gomes";
cliente1.cpf= "222.223.231-02";

const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.cliente = cliente1;
ContaCorrenteAlice.agencia = 2365;
ContaCorrenteAlice.numero = "02345-8";

console.log(`As operações serão realizadas na conta do cliente: ${cliente1.nome} de cpf ${cliente1.cpf} e agência ${ContaCorrenteAlice.agencia} número da conta ${ContaCorrenteAlice.numero}.`);

ContaCorrenteRicardo.transferir(200, ContaCorrenteAlice);
console.log(`O saldo atual é dê: ${ContaCorrenteAlice._saldo}`);
ContaCorrenteAlice.sacar(25);
console.log(`O saldo atual é dê: ${ContaCorrenteAlice._saldo}`);
ContaCorrenteAlice.depositar(500);
console.log(`O saldo atual é dê: ${ContaCorrenteAlice._saldo}`);


 
 

 
  




