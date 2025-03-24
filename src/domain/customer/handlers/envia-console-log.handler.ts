import { CustomerAddressChangedEvent } from "../events/customer-address-changed.event";

export class EnviaConsoleLogHandler {
  handle(event: CustomerAddressChangedEvent): void {
    console.log(
      `Endereço do cliente: ${event.customerId}, ${event.customerName} alterado para: ${event.newAddress}`
    );
  }
}
