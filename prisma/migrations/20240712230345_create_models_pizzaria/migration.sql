-- CreateTable
CREATE TABLE `categorias` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data_criacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_alteracao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `preco` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,
    `data_criacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_alteracao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `categoria_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id` VARCHAR(191) NOT NULL,
    `mesa` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `rascunho` BOOLEAN NOT NULL DEFAULT true,
    `nome_usuario` VARCHAR(191) NULL,
    `data_criacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_alteracao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(191) NOT NULL,
    `quatidade` INTEGER NOT NULL,
    `data_criacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_alteracao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pedido_id` VARCHAR(191) NOT NULL,
    `produto_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
