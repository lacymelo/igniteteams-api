## imagem do node
FROM node

## diretório onde a imagem será criada
WORKDIR /usr/app

## copia as instalações do package.json
COPY package.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

## instalar a dependências
RUN npm install

RUN npx prisma generate

## porta que está sendo rodada
EXPOSE 3333

## executa o script
CMD ["npm", "run", "dev"]