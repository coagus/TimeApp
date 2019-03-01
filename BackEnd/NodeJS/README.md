# TimeApp-srv-nodejs
TimeApp service with node js

# Enviroment Install
docker build --tag=timeapp-srv .

##Linux & Mac
docker run -it -d -p 3000:3000 --name=timeappsrv -v $PWD/app:/app timeapp-srv

## Windows
docker run -it -d -p 3000:3000 --name=timeappsrv -v %CD%/app:/app timeapp-srv

## Ingresar al server
docker exec -it timeappsrv /bin/sh