update products
set image_url = $2, product_name = $3, price = $4
where product_id = $1;

select * from products;
