# TimeApp-srv-nodejs
TimeApp with IONIC

# Enviroment Install
docker build --tag=timeapp-ionic .

##Linux & Mac
docker run -it -d -p 8100:8100 --name=timeappionic -v $PWD/app:/app timeapp-ionic

## Windows
docker run -it -d -p 8100:8100 --name=timeappionic -v %CD%/app:/app timeapp-ionic

## Ingresar al server
docker exec -it timeappionic /bin/bash