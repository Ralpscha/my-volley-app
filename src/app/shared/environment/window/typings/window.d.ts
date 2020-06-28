interface Window {
  env: Env;
  Symbol: any;
}

interface Env {
  properties: Array<Property>;
}

interface Property {
  key: string;
  value: any;
}
