import Map "mo:core/Map";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    address : Text;
    services : [Text];
    submittedAt : Time.Time;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Int.compare(submission1.submittedAt, submission2.submittedAt);
    };

    public func compareByName(submission1 : Submission, submission2 : Submission) : Order.Order {
      Text.compare(submission1.name, submission2.name);
    };
  };

  var nextId = 0;
  let submissions = Map.empty<Text, Submission>();

  func getNewId() : Text {
    let id = nextId.toText();
    nextId += 1;
    id;
  };

  public shared ({ caller }) func submitForm(name : Text, phone : Text, address : Text, services : [Text]) : async Text {
    let id = getNewId();

    let submission : Submission = {
      name;
      phone;
      address;
      services;
      submittedAt = Time.now();
    };

    submissions.add(id, submission);
    id;
  };

  public shared ({ caller }) func removeForm(id : Text) : async () {
    if (not submissions.containsKey(id)) {
      Runtime.trap("Submission does not exist.");
    };
    submissions.remove(id);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getAllSubmissionsByName() : async [Submission] {
    submissions.values().toArray().sort(Submission.compareByName);
  };

  public query ({ caller }) func getAllSubmissionsByService(service : Text) : async [Submission] {
    let submissionIter = submissions.values();
    let filteredIter = submissionIter.filter(
      func(s) {
        s.services.filter(func(x) { x == service }).size() > 0;
      }
    );
    filteredIter.toArray();
  };

  public type SubmissionRequest = {
    name : Text;
    phone : Text;
    address : Text;
    services : [Text];
  };

  public query ({ caller }) func getSubmission(id : Text) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist.") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getSubmissionCount() : async Nat {
    submissions.size();
  };
};
