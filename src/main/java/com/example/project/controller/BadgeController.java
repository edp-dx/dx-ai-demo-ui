```java
package com.example.project.controller;

import com.example.project.entity.Badge;
import com.example.project.service.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/badges")
public class BadgeController {

    private final BadgeService badgeService;

    @Autowired
    public BadgeController(BadgeService badgeService) {
        this.badgeService = badgeService;
    }

    @GetMapping
    public List<Badge> getAllBadges() {
        return badgeService.findAllBadges();
    }

    // Exception handling and logging can be added here
}
```
