FROM nginx
WORKDIR /var/www/html/
COPY ./docker/conf.d /etc/nginx/conf.d
COPY ./dist/angular_crud/ /var/www/html/
