FROM node:15.13-alpine as build

WORKDIR /prof_portfolio

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /prof_portfolio/build /usr/share/nginx/html

