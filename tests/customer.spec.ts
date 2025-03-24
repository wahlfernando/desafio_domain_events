import { Customer } from "../src/domain/customer/customer";

const customer = Customer.create("1", "João", "Rua A, 123");
customer.changeAddress("Rua B, 456");
