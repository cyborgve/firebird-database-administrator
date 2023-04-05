export interface TableDescription {
  name: string;
  type: string;
  encoding: string;
  collate: string;
  computed: string;
  default: string;
  nullable: boolean;
  check: string;
  unique: boolean;
  primary: string;
  foreign: string;
}
