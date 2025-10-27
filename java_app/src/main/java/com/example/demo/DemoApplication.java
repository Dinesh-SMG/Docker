package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The main Spring Boot application class.
 *
 * @SpringBootApplication: Denotes a Spring Boot application.
 * @RestController: Combines @Controller and @ResponseBody, making it suitable for RESTful web services.
 */
@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        // Starts the Spring application
        SpringApplication.run(DemoApplication.class, args);
    }

    /**
     * Defines a simple GET endpoint at the root path ("/").
     * @return A welcome message.
     */
    @GetMapping("/")
    public String welcomeMessage() {
        return "Spring Boot App is Running! Hello from the Docker container.";
    }
}
