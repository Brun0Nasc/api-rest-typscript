CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;

$$ LANGUAGE plpgsql;

CREATE TABLE "usuarios" (
  "id" serial PRIMARY KEY,
  "nome" varchar(70) NOT NULL,
  "telefone" char(16) NOT NULL,
  "email" varchar(100) NOT NULL,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()',
  "deleted_at" timestamp
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "usuarios"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE "chaves" (
  "id" serial PRIMARY KEY,
  "valor_chave" varchar NOT NULL,
  "usuario_id" int,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()',
  "deleted_at" timestamp,
  constraint fk_usuario foreign key(usuario_id) references usuarios(id) on delete set null
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "chaves"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE "transacoes" (
  "id" serial PRIMARY KEY,
  "de_usuario_id" int,
  "para_usuario_id" int,
  "valor" float NOT NULL,
  "created_at" timestamp DEFAULT 'now()',
  constraint fk_de_usuario foreign key(de_usuario_id) references usuarios(id) on delete set null,
  constraint fk_para_usuario foreign key(para_usuario_id) references usuarios(id) on delete set null
);