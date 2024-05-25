CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar registros en la tabla users
INSERT INTO users (name, email) VALUES
('Juan Perez', 'juan.perez@example.com'),
('Maria Garcia', 'maria.garcia@example.com'),
('Carlos Ruiz', 'carlos.ruiz@example.com'),
('Ana Lopez', 'ana.lopez@example.com'),
('Luis Martinez', 'luis.martinez@example.com');