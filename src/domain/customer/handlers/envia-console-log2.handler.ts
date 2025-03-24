import { CustomerCreatedEvent } from "../events/customer-created.event";

export class EnviaConsoleLog2Handler {
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
