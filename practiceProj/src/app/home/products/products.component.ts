import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

<<<<<<< HEAD
=======
  products = [[0, "https://dks.scene7.com/is/image/dkscdn/17NWBWFLCRNRGZXXXWLK_Black_White_is?wid=1080&fmt=jpg", "New Balance", "Black", "$1.00"], [1, "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARERMSEBMSFhUXGBUXFhUVFxIYFRUXFxcXFxUYFxUZHiggGR0lHxUXITEiJSkrLi4wGB8zODMtNygtLi0BCgoKDg0OGxAQGzEhICU1MjMtLS42MjUuLy8tLzAtMi8wLS0tNS0tMS0rLS8tNTEtLS0tLjUtLS0tLTUrLi8rLv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEUQAAEDAgQDBQQGBQsFAQAAAAEAAgMEEQUSITEGQVETImFxgQcUMpFCUnKhscEjM5LR0hY0Q1NiY3OCk7LwJESEwvEV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EAC0RAQACAgECAwYGAwAAAAAAAAABAgMRBCFBEjFRBUJhcaHwEyKBkdHhFLHB/9oADAMBAAIRAxEAPwD3FERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXPU1bWAl2w3Kjm8Rw3tr5oJlFrhma8XaQQtiAirXEnExgf2UTQXbve6+RgPIfWeRrbYDU8ga9JjlVJ3u1kZ9UtAy3Hhax56EFWVx2mNqLcjHW8Vmf6+b0ZFSMP41cxwjqmbbyM38yzn6fJZVOPtjrLtla4Pa0xjN3HNvZzTf4XX/ACuvGm7Lx8mONzG4nymPKfkuqLlw+uZM3My+mjmnRzT0IXUoUROxERAREQEREBERAREQEREBERAREQEREBR2NunyZacta930nXIAGp0HM6DwuTysZFUz2nCrdTEUrmsa0ZpXF+RxYL3a1x0Gwvci+yDLimreymbm0c4AOttmI71vDdUZlcL2urAaOSXC4WungkezLleyRpa8DQMznTOAbeJCqsWE1DnW7GW43ux1h5uI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", "Van", "Every Color", "$2.00"]]

>>>>>>> cf828d13253bb2f9d0323b41b8996982345f0d33
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  onCreateProduct() {

  }

  onUpdateProduct() {

  }

  onDeleteProduct() {
    
  }

>>>>>>> cf828d13253bb2f9d0323b41b8996982345f0d33
}
