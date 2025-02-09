## GoodHamburgerAPI

### How to run and test the application:

1) Clone the repository
2) On the project root folder, run the following commands in order to create the docker images and containers necessary to run the project:
  - docker build -t goodhamburger-api .
  - docker-compose up
3) Using a web browser or postman, you can send requests using the following urls:
  - GET all orders http://localhost:11337/api/order
  - GET all sandwiches http://localhost:11337/api/sandwiches
  - GET all extras http://localhost:11337/api/extras
  - POST create order http://localhost:11337/api/order
  - PUT update an order http://localhost:11337/api/order/{orderID}
  - DELETE an order http://localhost:11337/api/order/{orderID}
