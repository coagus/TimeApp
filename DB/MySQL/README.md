# Base de datos para TimeApp

docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=timeapp -d mysql:5.7
