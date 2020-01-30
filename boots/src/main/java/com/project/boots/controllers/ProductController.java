package com.project.boots.controllers;

import com.project.boots.models.Product;
import com.project.boots.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin("http://localhost:4200")
//@RequestMapping("/product")
@RestController
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public String test() {
        return "Congratulations from BlogController.java";
    }

    @GetMapping(value = "/product")
    public List<Product> index() {
        return productRepository.findAll();
    }

    @PostMapping(value = "/product")
    public Product create(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping(value = "/product/{id}")
    public Optional<Product> show(@PathVariable int id) {
//        return productRepository.getOne(id);
        return productRepository.findById(id);
    }

//    edit product/:id/edit

//    @PutMapping(value = "/product/:id")
//    public void update() {}

//    @DeleteMapping(value = "/product/:id")
//    public void destroy() {}
}
