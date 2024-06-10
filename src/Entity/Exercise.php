<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ExerciseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: ExerciseRepository::class)]
#[ORM\Table(name: "hevy_exercises")]
#[UniqueEntity(fields: "name", message: "Un exercice existe déjà avec ce nom.")]
#[ApiResource]
class Exercise
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $name = null;

    #[ORM\Column(length: 50)]
    private ?string $equipment = null;

    #[ORM\Column(length: 50)]
    private ?string $primaryMuscleGroup = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $otherMuscles = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt;

    /**
     * @var Collection<int, Routine>
     */
    #[ORM\ManyToMany(targetEntity: Routine::class, mappedBy: 'exercices')]
    private Collection $routines;
    
    public function __construct()
    {
        $this->createdAt = $this->updatedAt = new \DateTimeImmutable("now", new \DateTimeZone("Europe/Paris"));
        $this->routines = new ArrayCollection();
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getEquipment(): ?string
    {
        return $this->equipment;
    }

    public function setEquipment(string $equipment): static
    {
        $this->equipment = $equipment;

        return $this;
    }

    public function getPrimaryMuscleGroup(): ?string
    {
        return $this->primaryMuscleGroup;
    }

    public function setPrimaryMuscleGroup(string $primaryMuscleGroup): static
    {
        $this->primaryMuscleGroup = $primaryMuscleGroup;

        return $this;
    }

    public function getOtherMuscles(): ?string
    {
        return $this->otherMuscles;
    }

    public function setOtherMuscles(?string $otherMuscles): static
    {
        $this->otherMuscles = $otherMuscles;

        return $this;
    }
    
    public function getComment(): ?string
    {
        return $this->comment;
    }
    
    public function setComment(?string $comment): static
    {
        $this->comment = $comment;
        
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(): static
    {
        $this->updatedAt = new \DateTimeImmutable("now", new \DateTimeZone("Europe/Paris"));

        return $this;
    }

    /**
     * @return Collection<int, Routine>
     */
    public function getRoutines(): Collection
    {
        return $this->routines;
    }

    public function addRoutine(Routine $routine): static
    {
        if (!$this->routines->contains($routine)) {
            $this->routines->add($routine);
            $routine->addExercice($this);
        }

        return $this;
    }

    public function removeRoutine(Routine $routine): static
    {
        if ($this->routines->removeElement($routine)) {
            $routine->removeExercice($this);
        }

        return $this;
    }
}
