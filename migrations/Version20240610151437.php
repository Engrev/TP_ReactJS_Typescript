<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240610151437 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE hevy_folders (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hevy_routines (id INT AUTO_INCREMENT NOT NULL, folder_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_4B827DB7162CB942 (folder_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE routine_exercise (routine_id INT NOT NULL, exercise_id INT NOT NULL, INDEX IDX_50CE302AF27A94C7 (routine_id), INDEX IDX_50CE302AE934951A (exercise_id), PRIMARY KEY(routine_id, exercise_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE hevy_routines ADD CONSTRAINT FK_4B827DB7162CB942 FOREIGN KEY (folder_id) REFERENCES hevy_folders (id)');
        $this->addSql('ALTER TABLE routine_exercise ADD CONSTRAINT FK_50CE302AF27A94C7 FOREIGN KEY (routine_id) REFERENCES hevy_routines (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE routine_exercise ADD CONSTRAINT FK_50CE302AE934951A FOREIGN KEY (exercise_id) REFERENCES hevy_exercises (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE hevy_exercises ADD comment VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE hevy_exercises RENAME INDEX uniq_8e6aea7d5e237e06 TO UNIQ_924C490D5E237E06');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE hevy_routines DROP FOREIGN KEY FK_4B827DB7162CB942');
        $this->addSql('ALTER TABLE routine_exercise DROP FOREIGN KEY FK_50CE302AF27A94C7');
        $this->addSql('ALTER TABLE routine_exercise DROP FOREIGN KEY FK_50CE302AE934951A');
        $this->addSql('DROP TABLE hevy_folders');
        $this->addSql('DROP TABLE hevy_routines');
        $this->addSql('DROP TABLE routine_exercise');
        $this->addSql('ALTER TABLE hevy_exercises DROP comment');
        $this->addSql('ALTER TABLE hevy_exercises RENAME INDEX uniq_924c490d5e237e06 TO UNIQ_8E6AEA7D5E237E06');
    }
}
