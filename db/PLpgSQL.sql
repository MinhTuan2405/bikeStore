-- ==================== PROCEDURES ====================
-- Tạo thủ tục để thêm sản phẩm mới vào bảng production.products
CREATE OR REPLACE PROCEDURE production.add_product(
    p_name VARCHAR,
    p_brand_id INT,
    p_category_id INT,
    p_model_year SMALLINT,
    p_list_price NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO production.products (
        product_name,
        brand_id,
        category_id,
        model_year,
        list_price
    )
    VALUES (
        p_name,
        p_brand_id,
        p_category_id,
        p_model_year,
        p_list_price
    );
    
    RAISE NOTICE 'Product "%" added successfully.', p_name;
END;
$$;

CALL production.add_product(
    'Speedster 300'::VARCHAR,
    1::INT,
    2::INT,
    2025::SMALLINT,
    1599.99::NUMERIC
);

SELECT * FROM production.products
WHERE product_name = 'Speedster 300'

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

SELECT sales.get_order_total(5);


-- ==================== TRIGGERS ====================
-- Prevent high discount over 50%
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

INSERT INTO sales.order_items (
    order_id, item_id, product_id,
    quantity, list_price, discount
) VALUES (1, 456, 1, 2, 1000.00, 0.3);


INSERT INTO sales.order_items (
    order_id, item_id, product_id,
    quantity, list_price, discount
) VALUES (1, 2, 1, 1, 1500.00, 0.6);
-- ERROR: Discount cannot exceed 50%



