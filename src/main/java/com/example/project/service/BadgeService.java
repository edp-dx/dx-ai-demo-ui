```java
package com.example.project.service;

import com.example.project.entity.Badge;
import com.example.project.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BadgeService {

    private final BadgeRepository badgeRepository;

    @Autowired
    public BadgeService(BadgeRepository badgeRepository) {
        this.badgeRepository = badgeRepository;
    }

    public List<Badge> findAllBadges() {
        return badgeRepository.findAll();
    }

    // Additional service methods and exception handling can be added here
}
```
