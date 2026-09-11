export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits.replace(/^(\d*)/, '($1');
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d*)/, '($1) $2');
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d*)/, '($1) $2-$3');
  }
  return digits.replace(/^(\d{2})(\d{5})(\d*)/, '($1) $2-$3');
}

export function maskCpf(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2');
}

export function maskCnpj(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
}

export function maskCurrency(value: string): string {
  const digits = value.replace(/\D/g, '');
  const number = Number(digits) / 100;
  if (Number.isNaN(number)) return '';
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function unmaskCurrency(value: string): number {
  const digits = value.replace(/\D/g, '');
  return Number(digits) / 100;
}

export function unmaskDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function isValidCpf(rawCpf: string): boolean {
  const cpf = unmaskDigits(rawCpf);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const calcCheckDigit = (base: string, factor: number) => {
    let total = 0;
    for (const char of base) {
      total += Number(char) * factor--;
    }
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const digit1 = calcCheckDigit(cpf.slice(0, 9), 10);
  const digit2 = calcCheckDigit(cpf.slice(0, 10), 11);

  return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
}
