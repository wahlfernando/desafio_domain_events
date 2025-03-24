export class CustomerAddressChangedEvent {
  constructor(
    public readonly customerId: string,
    public readonly customerName: string,
    public readonly newAddress: string
  ) {}
}
