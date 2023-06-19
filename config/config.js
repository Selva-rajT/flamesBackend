require('dotenv').config();

CONFIG = {};

CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;


CONFIG.max_pool_conn=20,
CONFIG.min_pool_conn=5,
CONFIG.conn_idle_time=100000