```java
package com.example.project.repository;

import com.example.project.entity.Badge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BadgeRepository extends JpaRepository<Badge, Long> {
    // Custom methods can be added here if needed
}
```
