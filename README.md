### How to use prisma with nodejs and posgtres, an example
1. create a directory and then type: npm init -y and install prisma: npm i prisma
2. The next step is to initialize prisma into the project by issuing command: npx prisma init
3. Connecting to postgres by replacing the line below
DATABASE_URL="postgresql://your-user:your-password@localhost:5432/db-name?schema=public" with our actual db in postgre
