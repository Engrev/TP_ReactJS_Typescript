<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240614212629 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE hevy_trainings (id INT AUTO_INCREMENT NOT NULL, start_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', duration VARCHAR(255) DEFAULT NULL, volume INT UNSIGNED DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE training_exercise (training_id INT NOT NULL, exercise_id INT NOT NULL, INDEX IDX_49BFC68BBEFD98D1 (training_id), INDEX IDX_49BFC68BE934951A (exercise_id), PRIMARY KEY(training_id, exercise_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE training_exercise ADD CONSTRAINT FK_49BFC68BBEFD98D1 FOREIGN KEY (training_id) REFERENCES hevy_trainings (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE training_exercise ADD CONSTRAINT FK_49BFC68BE934951A FOREIGN KEY (exercise_id) REFERENCES hevy_exercises (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE hevy_exercises ADD image LONGTEXT DEFAULT \'default.svg\' NOT NULL AFTER secondary_muscle_group');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE training_exercise DROP FOREIGN KEY FK_49BFC68BBEFD98D1');
        $this->addSql('ALTER TABLE training_exercise DROP FOREIGN KEY FK_49BFC68BE934951A');
        $this->addSql('DROP TABLE hevy_trainings');
        $this->addSql('DROP TABLE training_exercise');
        $this->addSql('ALTER TABLE hevy_exercises DROP image');
    }
}
