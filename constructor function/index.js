class ValidaCPF { 
    constructor(cpfEnviado) { 
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        });
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() { 
        let cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

   
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof cpfLimpo !== `string`) return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.sequencia()) return false;
        if (!this.geraNovoCpf()) return false;
    }
}

let validacpf = new ValidaCPF(`086.405.205-77`)
console.log(validacpf)
console.log(validacpf.geraDigito())


