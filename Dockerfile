FROM node:carbon AS frontbuilder

WORKDIR /frontbuild
COPY ./package*.json /frontbuild/
RUN npm install

COPY . /frontbuild
RUN npm run build

FROM node:carbon AS landingbuild

WORKDIR /landingbuild
COPY ./package*.json /landingbuild/
RUN npm install

COPY . /landingbuild
RUN npm run build

FROM nginx
COPY ./repo_landing/nginx/landing.conf /etc/nginx/conf.d/landing.conf
COPY --from=landingbuild /landingbuild/build /usr/share/nginx/landing
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=frontbuilder /frontbuild/build /usr/share/nginx/html
