```java
package com.yourpackage.service;

import com.yourpackage.model.Badge;
import com.yourpackage.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BadgeService {
    @Autowired
    private BadgeRepository badgeRepository;

    public List<Badge> findAllBadges() {
        return badgeRepository.findAll();
    }
}
```
