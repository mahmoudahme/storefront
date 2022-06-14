## API Endpoints
#### Products
- Index: '/products' [get]
- Show: '/products/:id' [get]
- Create: '/products' [post]
- Delete: '/products' [delete]

#### Users
- Index: '/users' [get]
- Show: '/users/:id' [get]
- Create: '/users' [post]
- Delete: '/users' [delete]


#### Orders
- Index: '/orders' [get]
- Show: '/orders/:id' [get]
- Create: '/orders' [post]
- Delete: '/orders' [delete]
- addProduct: '/orders/:id/products' [post]

## Data Shapes
#### Product
- id [SERIAL PRIMARY KEY]
- name [VARCHAR]
- price [integer]
- category [VARCHAR]

#### User
- id [SERIAL PRIMARY KEY]
- firstname [VARCHAR]
- lastname [VARCHAR]
- password [VARCHAR]

#### Orders
- id [SERIAL PRIMARY KEY]
- status [VARCHAR(15)]
- user_id [bigint REFERENCES users(id)]

### Order_products
- id [SERIAL PRIMARY KEY]
- quantity [integer]
- order_id [bigint REFERENCES orders(id)]
- product_id [bigint REFERENCES products(id)]