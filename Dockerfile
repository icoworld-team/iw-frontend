FROM node:carbon AS frontbuilder

WORKDIR /frontbuild
COPY ./package*.json /frontbuild/
RUN npm install

COPY . /frontbuild
RUN npm run build

FROM nginx
ARG API_ENDPOINT
ENV API_ENDPOINT=${API_ENDPOINT}
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=frontbuilder /frontbuild/build /usr/share/nginx/html
