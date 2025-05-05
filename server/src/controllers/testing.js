import prisma from '../database/prismaClient.js';

const gettALlBrand = async (req, res) => {
    try {
        const brands = await prisma.brands.findMany();
        res.json(brands);
      } catch (error) {
        console.error('Lỗi khi lấy brands:', error);
        res.status(500).json({ error: 'Lỗi server' });
      }
}

export default gettALlBrand