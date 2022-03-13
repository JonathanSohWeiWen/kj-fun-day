export default interface GameDescription {
  name: string;
  description: string;
  requiresFacilitator: boolean;
  instructions: (string | string[])[];
  pointSystem: {
    lowerPrimary?: string[];
    upperPrimary?: string;
  };
}
