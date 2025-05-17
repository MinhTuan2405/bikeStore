// Hàm xử lý BigInt và Decimal (Prisma Decimal.js)
function normalizeValue(value) {
    if (typeof value === 'bigint') {
      return value.toString(); // hoặc Number(value) nếu chắc chắn nhỏ
    }
  
    // Prisma Decimal object (Decimal.js)
    if (
      typeof value === 'object' &&
      value !== null &&
      typeof value.toNumber === 'function'
    ) {
      return value.toNumber(); // hoặc .toString() nếu muốn dạng text
    }
  
    return value;
}
  
const convertDecimalToNumber = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(convertDecimalToNumber);
    } else if (obj !== null && typeof obj === 'object') {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, convertDecimalToNumber(normalizeValue(value))])
      );
    } else {
      return normalizeValue(obj);
    }
}

export default convertDecimalToNumber