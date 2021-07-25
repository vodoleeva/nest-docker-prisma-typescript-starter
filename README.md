
# NestJS Docker Prisma Typescript Starter (+ React Web UI)

## Develop the Nest application

```bash
cd api
npm install
cp .env.example .env
npx prisma generate
prisma migrate dev --name init
npm run start:dev
```

### Docker File

Get started by running

```bash
cd api
docker build -t nest-api .

docker run -p 3000:3000 --env-file .env -d nest-api
```

### Docker Compose

```bash
cd api
docker-compose up
# or detached
docker-compose up -d
```

### Swagger 
Can be found here: http://localhost:3000/swagger/


## Develop the React application
```bash
yarn start
```
