export class ContaCorrente{ 
    cliente;
    agencia;
    numero;
    
    
    _saldo = 0;
  
    sacar(saque){
    
      if(this._saldo >= saque){
        this._saldo -= saque;
        return saque;
     }
   
    }
    depositar(valor){
      if(valor > 0){
        this._saldo += valor;
     }
   
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


  }