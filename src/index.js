const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || "3000";

app.get('/', async (req, res) => {
    const employee = await prisma.employee.findMany();
    res.json(employee);
});

app.post('/employee', async (req, res) => {
    const employee = await prisma.employee.create({ data: req.body });
    res.json(employee);
});

app.listen(port, () => {
    console.log(`Server Running at ${port} 🚀`);
});