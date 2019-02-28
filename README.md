# TimeApp-srv-nodejs
TimeApp service with node js

# Enviroment Install
docker build --tag=timeapp-srv .
docker run -it -d -p 3000:3000 --name=timeappsrv timeapp-srv
docker exec -it timeappsrv /bin/sh