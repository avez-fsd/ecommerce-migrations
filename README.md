
## Migrations Script
1. Create migration file
```
npx sequelize-cli migration:generate --name <file name>
```
2. Run migration
```
npx sequelize-cli db:migrate --config=config/config.json --env=[development|staging|uat|production => default: development]
```
Orders: 

Id, order_no, total_amount, payment_id, total_delivery_fee, user_id, created_at, updated_at

Order Details:

Id, order_no, parend_order_id, product_id, product_name, map, selling-price, discount, shipping_addr, shipping_city, shipping_state, shipping_pincode, shipping_weight, order_status_id, created_at, updated_at

Order Statuses:

Id, status, created_at, updated_at

Status:
1. Not confirmed
2. Confirmed
3. Cancelled
4. Auto Cancelled
5. Ready to pickup
6. Shipped
7. Out for delivery
8. Delivered
9. Full filled

Order Status Log:

Id, child_order_id, status, created_at

Products: 

Id, name, mrp, selling_price, discount, weight, category_id, stock, is_active, created_at, updated_at

Categories:

Id, name, created_at, updated_at

Users:

Id, name, email, password, created_at, updated_at

Payments:

Id, order_id, customer_id, payment_type, payment_reference_id, total_amount, commission_percentage, platform_commission, transfer_amount, payment_status_id, created_at, updated_at

Payment Statuses:
Id, status, created_at, updated_at

Status: 
1. Pending (Un captured state)
2. Success (Captured)
3. Failed

Customer Addresses:

Id, user_id, address, city, state, pincode,  created_at, updated_at

Commission:

Id, commission_percentage, created_at, updated_at

Delivery Fee

Id, min_price, max_price, delivery_fee, created_at, updated_at