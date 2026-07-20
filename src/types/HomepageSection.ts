import { SectionType } from "./SectionType";
export interface HomepageSection {

    id:number;

    type:SectionType;

    displayorder:number;

    enabled:boolean;

    config:unknown;

}