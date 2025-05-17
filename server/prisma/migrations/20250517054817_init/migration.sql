-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "production";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "sales";

-- CreateTable
CREATE TABLE "production"."brands" (
    "brand_id" SERIAL NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("brand_id")
);

-- CreateTable
CREATE TABLE "production"."categories" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "production"."products" (
    "product_id" SERIAL NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "brand_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "model_year" SMALLINT NOT NULL,
    "list_price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "production"."stocks" (
    "store_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("store_id","product_id")
);

-- CreateTable
CREATE TABLE "sales"."customers" (
    "customer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(25),
    "email" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255),
    "city" VARCHAR(50),
    "state" VARCHAR(25),
    "zip_code" VARCHAR(5),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "sales"."order_items" (
    "order_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "list_price" DECIMAL(10,2) NOT NULL,
    "discount" DECIMAL(4,2) NOT NULL DEFAULT 0,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("order_id","item_id")
);

-- CreateTable
CREATE TABLE "sales"."orders" (
    "order_id" SERIAL NOT NULL,
    "customer_id" INTEGER,
    "order_status" SMALLINT NOT NULL,
    "order_date" DATE NOT NULL,
    "required_date" DATE NOT NULL,
    "shipped_date" DATE,
    "store_id" INTEGER NOT NULL,
    "staff_id" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "sales"."staffs" (
    "staff_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(25),
    "active" BOOLEAN NOT NULL,
    "store_id" INTEGER NOT NULL,
    "manager_id" INTEGER,

    CONSTRAINT "staffs_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "sales"."stores" (
    "store_id" SERIAL NOT NULL,
    "store_name" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(25),
    "email" VARCHAR(255),
    "street" VARCHAR(255),
    "city" VARCHAR(255),
    "state" VARCHAR(10),
    "zip_code" VARCHAR(5),

    CONSTRAINT "stores_pkey" PRIMARY KEY ("store_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "staffs_email_key" ON "sales"."staffs"("email");

-- AddForeignKey
ALTER TABLE "production"."products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "production"."brands"("brand_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production"."products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "production"."categories"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production"."stocks" ADD CONSTRAINT "stocks_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "production"."products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production"."stocks" ADD CONSTRAINT "stocks_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "sales"."stores"("store_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales"."order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "sales"."orders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales"."order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "production"."products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales"."orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "sales"."customers"("customer_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales"."orders" ADD CONSTRAINT "orders_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "sales"."staffs"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales"."orders" ADD CONSTRAINT "orders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "sales"."stores"("store_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales"."staffs" ADD CONSTRAINT "staffs_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "sales"."staffs"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales"."staffs" ADD CONSTRAINT "staffs_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "sales"."stores"("store_id") ON DELETE CASCADE ON UPDATE CASCADE;
