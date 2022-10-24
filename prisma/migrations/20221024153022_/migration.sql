-- CreateTable
CREATE TABLE `interaccion_comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_comentario` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `tipo` ENUM('Me encanta', 'Me sorprende', 'Me asombra') NULL DEFAULT 'Me encanta',
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_comentario`(`id_comentario`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interaccion_posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_post` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `tipo` ENUM('Me encanta', 'Me sorprende', 'Me asombra') NULL DEFAULT 'Me encanta',
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_post`(`id_post`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `interaccion_comentarios` ADD CONSTRAINT `interaccion_comentarios_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interaccion_comentarios` ADD CONSTRAINT `interaccion_comentarios_ibfk_2` FOREIGN KEY (`id_comentario`) REFERENCES `comentarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interaccion_posts` ADD CONSTRAINT `interaccion_posts_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interaccion_posts` ADD CONSTRAINT `interaccion_posts_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
