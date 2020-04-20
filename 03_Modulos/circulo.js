const pi = Math.PI;

const area = function(r) {
    return pi * r ^ 2;
}

const circunferencia = function(r) {
    return 2 * r * pi;
}

exports.area = area;
exports.circunferencia = circunferencia;