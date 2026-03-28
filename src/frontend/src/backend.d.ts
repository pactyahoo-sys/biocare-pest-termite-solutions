import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    name: string;
    submittedAt: Time;
    address: string;
    phone: string;
    services: Array<string>;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getAllSubmissionsByName(): Promise<Array<Submission>>;
    getAllSubmissionsByService(service: string): Promise<Array<Submission>>;
    getSubmission(id: string): Promise<Submission>;
    getSubmissionCount(): Promise<bigint>;
    removeForm(id: string): Promise<void>;
    submitForm(name: string, phone: string, address: string, services: Array<string>): Promise<string>;
}
