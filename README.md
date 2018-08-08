## Boilerplate для frontend-разработки

За основу взята сборка: https://github.com/rokoroku/react-redux-typescript-boilerplate

Дополнительно добавлены:
* Apollo
* GraphQL
* Office UI Fabric

Запуск проекта:

    $ git clone https://github.com/pyshopml2/iw-frontend
    cd iw-frontend
    npm install
    npm start



## Как собрать и запустить docker-образ

1. Установить docker
2. git clone https://github.com/pyshopml2/iw-frontend
3. cd iw-frontend
4. docker build -t iw-frontend:0.1 .
5. docker run -ti -d -p 3000:3000 iw-frontend:0.1
6. Приложение доступно - localhost:3000