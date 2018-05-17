export interface Loggable {
  log(message: string): void;
}
export class ConsoleLogger implements Loggable {
  log(message: string) {
    console.log(message);
  }
}
