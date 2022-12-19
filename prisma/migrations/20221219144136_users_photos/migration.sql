/*
  Warnings:

  - The values [Me sorprende,Me asombra] on the enum `interaccion_comentarios_tipo` will be removed. If these variants are still used in the database, this will fail.
  - The values [Me sorprende,Me asombra] on the enum `interaccion_posts_tipo` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `interaccion_comentarios` MODIFY `tipo` ENUM('Me encanta') NULL DEFAULT 'Me encanta';

-- AlterTable
ALTER TABLE `interaccion_posts` MODIFY `tipo` ENUM('Me encanta') NULL DEFAULT 'Me encanta';

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `foto` VARCHAR(100) NULL;
