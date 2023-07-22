# stage one
FROM node:latest as build
USER root
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
# RUN npm run build 
# RUN chown -R root:1001 /usr/local/app
# stage two
FROM registry.access.redhat.com/ubi8/nginx-120:1-111
RUN chown -R root:1001 /usr/local/app
RUN chown -R root:1001 /usr/share/nginx
USER 1001
COPY --from=build /usr/local/app/dist/common-material-module-angular /usr/share/nginx/html
EXPOSE 8080