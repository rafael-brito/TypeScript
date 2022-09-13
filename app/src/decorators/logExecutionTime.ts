/*
Decorator para logar tempo de execução

um decorator é basicamente uma função
é um recurso experimental do type script
para isolarmos métodos genéricos que podem
ser reaproveitados em mais de uma classe.  
*/
export function logarTempoExecucao(asSeconds: boolean = false) {
    return function(
        target: any, //para métodos estáticos será o método construtor da classe - para métodos não-estáticos será o Prototype da classe
        propertyKey: string, //nome do método que foi decorado
        descriptor: PropertyDescriptor //aponta para o método que contém a implementação do decorator
    ) { 
        //declaring our decorator -- originalMethod is just a name to make abstraction easy
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) { //any[] == Array<any>
            //we're exporting a function threreby "this" will points to
            //the class which evokes logarTempoExecucao()
            const t1 = performance.now();
            const returnValue = originalMethod.apply(this, args); // see the docs for function apply(context, params)
            const t2 = performance.now();

            let divisor = 1;
            let unidade = 'miliseconds';
            if (asSeconds) {
                divisor = 1000;
                unidade = 'seconds';
            }
            
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            returnValue
        };

        return descriptor;
    }
}