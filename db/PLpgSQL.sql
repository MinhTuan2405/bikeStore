-- ==================== PROCEDURES ====================
-- 1. Add new product
CREATE OR REPLACE PROCEDURE production.add_product(
    p_name VARCHAR,
    p_brand_id INT,
    p_category_id INT,
    p_model_year SMALLINT,
    p_list_price NUMERIC
)
LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO production.products (product_name, brand_id, category_id, model_year, list_price)
    VALUES (p_name, p_brand_id, p_category_id, p_model_year, p_list_price);
END;
$$;

-- 2. Update product price by brand
CREATE OR REPLACE PROCEDURE production.update_price_by_brand(
    p_brand_id INT,
    p_percent NUMERIC
)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE production.products
    SET list_price = list_price * (1 + p_percent / 100)
    WHERE brand_id = p_brand_id;
END;
$$;

-- 3. Delete customer with related orders
CREATE OR REPLACE PROCEDURE sales.delete_customer_with_orders(
    p_customer_id INT
)
LANGUAGE plpgsql AS $$
BEGIN
    DELETE FROM sales.customers WHERE customer_id = p_customer_id;
END;
$$;

-- 4. Set staff active status
CREATE OR REPLACE PROCEDURE sales.set_staff_status(
    p_staff_id INT,
    p_status BOOLEAN
)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE sales.staffs
    SET active = p_status
    WHERE staff_id = p_staff_id;
END;
$$;

-- 5. Add stock quantity
CREATE OR REPLACE PROCEDURE production.add_stock(
    p_store_id INT,
    p_product_id INT,
    p_quantity INT
)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE production.stocks
    SET quantity = quantity + p_quantity
    WHERE store_id = p_store_id AND product_id = p_product_id;
END;
$$;

-- ==================== FUNCTIONS ====================
-- 1. Calculate order total
CREATE OR REPLACE FUNCTION sales.get_order_total(p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC := 0;
BEGIN
    SELECT SUM(quantity * list_price * (1 - discount))
    INTO total
    FROM sales.order_items
    WHERE order_id = p_order_id;
    RETURN total;
END;
$$ LANGUAGE plpgsql;

-- 2. Get staff full name
CREATE OR REPLACE FUNCTION sales.get_staff_full_name(p_staff_id INT)
RETURNS VARCHAR AS $$
DECLARE
    full_name VARCHAR;
BEGIN
    SELECT first_name || ' ' || last_name INTO full_name
    FROM sales.staffs
    WHERE staff_id = p_staff_id;
    RETURN full_name;
END;
$$ LANGUAGE plpgsql;

-- 3. Count customer orders
CREATE OR REPLACE FUNCTION sales.count_customer_orders(p_customer_id INT)
RETURNS INT AS $$
DECLARE
    order_count INT;
BEGIN
    SELECT COUNT(*) INTO order_count
    FROM sales.orders
    WHERE customer_id = p_customer_id;
    RETURN order_count;
END;
$$ LANGUAGE plpgsql;

-- 4. Get stock quantity
CREATE OR REPLACE FUNCTION production.get_stock_quantity(p_store_id INT, p_product_id INT)
RETURNS INT AS $$
DECLARE
    qty INT;
BEGIN
    SELECT quantity INTO qty
    FROM production.stocks
    WHERE store_id = p_store_id AND product_id = p_product_id;
    RETURN COALESCE(qty, 0);
END;
$$ LANGUAGE plpgsql;

-- 5. Check if product is in stock
CREATE OR REPLACE FUNCTION production.is_product_in_stock(p_store_id INT, p_product_id INT)
RETURNS BOOLEAN AS $$
DECLARE
    qty INT;
BEGIN
    SELECT quantity INTO qty
    FROM production.stocks
    WHERE store_id = p_store_id AND product_id = p_product_id;
    RETURN qty > 0;
END;
$$ LANGUAGE plpgsql;

-- ==================== TRIGGERS ====================
-- 1. Set shipped_date if order_status = 3
CREATE OR REPLACE FUNCTION sales.set_shipped_date()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.order_status = 3 AND NEW.shipped_date IS NULL THEN
        NEW.shipped_date := CURRENT_DATE;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_set_shipped_date
BEFORE UPDATE ON sales.orders
FOR EACH ROW
EXECUTE FUNCTION sales.set_shipped_date();

-- 2. Initialize stock for new product
CREATE OR REPLACE FUNCTION production.init_stock_for_new_product()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO production.stocks (store_id, product_id, quantity)
    SELECT store_id, NEW.product_id, 0 FROM sales.stores;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_init_stock
AFTER INSERT ON production.products
FOR EACH ROW
EXECUTE FUNCTION production.init_stock_for_new_product();

-- 3. Prevent high discount over 50%
CREATE OR REPLACE FUNCTION sales.prevent_high_discount()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.discount > 0.5 THEN
        RAISE EXCEPTION 'Discount cannot exceed 50%%';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_prevent_high_discount
BEFORE INSERT OR UPDATE ON sales.order_items
FOR EACH ROW
EXECUTE FUNCTION sales.prevent_high_discount();

-- 4. Log product price change
CREATE TABLE IF NOT EXISTS production.product_logs (
    log_id SERIAL PRIMARY KEY,
    product_id INT,
    old_price NUMERIC,
    new_price NUMERIC,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION production.log_price_change()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.list_price <> NEW.list_price THEN
        INSERT INTO production.product_logs (product_id, old_price, new_price)
        VALUES (OLD.product_id, OLD.list_price, NEW.list_price);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_log_price_change
AFTER UPDATE ON production.products
FOR EACH ROW
EXECUTE FUNCTION production.log_price_change();