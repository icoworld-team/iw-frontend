FROM node:carbon AS landingbuild

WORKDIR /landingbuild
COPY ./package*.json /landingbuild/
RUN npm install

COPY . /landingbuild
RUN npm run build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=landingbuild /landingbuild/build /usr/share/nginx/html
