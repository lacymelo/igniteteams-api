-- DropForeignKey
ALTER TABLE `players` DROP FOREIGN KEY `players_group_id_fkey`;

-- AddForeignKey
ALTER TABLE `players` ADD CONSTRAINT `players_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
