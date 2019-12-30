package com.project.boots.models;

import javax.persistence.*;

@Entity(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "title")
    private String title;

    @Column(name = "info")
    private String info;

    @Column(name = "sizes")
    private String sizes;
//    may need to be a different data type

    @Column(name = "price")
    private Integer price;

    public Product() {
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getImageURL() {
        return imageUrl;
    }

    public void setImageURL(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getSizes() {
        return sizes;
    }

    public void setSizes(String sizes) {
        this.sizes = sizes;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
