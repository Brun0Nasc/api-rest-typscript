import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666617995933 implements MigrationInterface {
    name = 'default1666617995933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying(70) NOT NULL, "telefone" character varying(16) NOT NULL, "email" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chaves" ("id" SERIAL NOT NULL, "valor_chave" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP NOT NULL, "usuario_id" integer, CONSTRAINT "PK_547ecdaa9c694db5f14bf632c76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chaves" ADD CONSTRAINT "FK_de7416439aaa531237afecd09c2" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chaves" DROP CONSTRAINT "FK_de7416439aaa531237afecd09c2"`);
        await queryRunner.query(`DROP TABLE "chaves"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
