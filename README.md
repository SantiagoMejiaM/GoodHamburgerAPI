## GoodHamburgerAPI

### How to run and test the application:

1) Clone the repository
2) On the project root folder, run the following commands in order to create the docker images and container necessary to execute the API:
  - docker build -t goodhamburger-api .
  - docker-compose up
3) Using a web browser or postman, you can send requests using the following urls:
  - GET all orders http://localhost:11337/api/order
  - GET all sandwiches http://localhost:11337/api/sandwiches
  - GET all extras http://localhost:11337/api/extras
  - POST create order http://localhost:11337/api/order
      - JSON Request body example for creating an order:
        {
          "sandwich" : "Burger",
          "soft_drink" : "Coke",
          "fries" : true
        }
  - PUT update an order http://localhost:11337/api/order/{orderID}
  - DELETE an order http://localhost:11337/api/order/{orderID}
