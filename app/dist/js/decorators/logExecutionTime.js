export function logarTempoExecucao(asSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const returnValue = originalMethod.apply(this, args);
            const t2 = performance.now();
            let divisor = 1;
            let unidade = 'miliseconds';
            if (asSeconds) {
                divisor = 1000;
                unidade = 'seconds';
            }
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            returnValue;
        };
        return descriptor;
    };
}
