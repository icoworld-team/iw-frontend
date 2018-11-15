FROM node:carbon AS frontbuilder

WORKDIR /frontbuild
COPY ./package*.json /frontbuild/
RUN npm install

COPY . /frontbuild
RUN npm run build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=frontbuilder /frontbuild/build /usr/share/nginx/html
