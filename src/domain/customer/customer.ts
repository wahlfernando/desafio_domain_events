import { CustomerAddressChangedEvent } from "./events/customer-address-changed.event";
import { CustomerCreatedEvent } from "./events/customer-created.event";
import { EnviaConsoleLogHandler } from "./handlers/envia-console-log.handler";
import { EnviaConsoleLog1Handler } from "./handlers/envia-console-log1.handler";
import { EnviaConsoleLog2Handler } from "./handlers/envia-console-log2.handler";

export class Customer {
  constructor(
    private id: string,
    private name: string,
    private address: string
  ) {}

  static create(id: string, name: string, address: string) {
    const customer = new Customer(id, name, address);
    const event = new CustomerCreatedEvent(id, name);
    Customer.dispatchEvent(event);
    return customer;
  }

  changeAddress(newAddress: string) {
    this.address = newAddress;
    const event = new CustomerAddressChangedEvent(
      this.id,
      this.name,
      newAddress
    );
    Customer.dispatchEvent(event);
  }

  private static dispatchEvent(event: any) {
    if (event instanceof CustomerCreatedEvent) {
      new EnviaConsoleLog1Handler().handle(event);
      new EnviaConsoleLog2Handler().handle(event);
    } else if (event instanceof CustomerAddressChangedEvent) {
      new EnviaConsoleLogHandler().handle(event);
    }
  }
}
