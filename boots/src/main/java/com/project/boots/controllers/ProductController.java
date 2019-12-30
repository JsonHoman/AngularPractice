package com.project.boots.controllers;

import com.project.boots.models.Product;
import com.project.boots.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    @RequestMapping("/product")
    public List<Product> list() { return productRepository.findAll(); }

    @RequestMapping("/")
    public String index() {
        return "Congratulations from BlogController.java";
    }
}
