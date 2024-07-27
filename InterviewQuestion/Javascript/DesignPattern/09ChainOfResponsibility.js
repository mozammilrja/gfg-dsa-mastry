// // Abstract Handler
// class Handler {
//   constructor() {
//     this.nextHandler = null;
//   }

//   setNext(handler) {
//     this.nextHandler = handler;
//     return handler;
//   }

//   handleRequest(request) {
//     if (this.nextHandler) {
//       return this.nextHandler.handleRequest(request);
//     } else {
//       return "No handler available for the request.";
//     }
//   }
// }

// // Concrete Handlers
// class BasicSupport extends Handler {
//   handleRequest(request) {
//     if (request.type === "simple") {
//       return `Basic Support: Handling request ${request.content}`;
//     }
//     return super.handleRequest(request);
//   }
// }

// class IntermediateSupport extends Handler {
//   handleRequest(request) {
//     if (request.type === "intermediate") {
//       return `Intermediate Support: Handling request ${request.content}`;
//     }
//     return super.handleRequest(request);
//   }
// }

// class AdvancedSupport extends Handler {
//   handleRequest(request) {
//     if (request.type === "advanced") {
//       return `Advanced Support: Handling request ${request.content}`;
//     }
//     return super.handleRequest(request);
//   }
// }

// // Client code
// const basicSupport = new BasicSupport();
// const intermediateSupport = new IntermediateSupport();
// const advancedSupport = new AdvancedSupport();

// basicSupport.setNext(intermediateSupport).setNext(advancedSupport);

// const requests = [
//   {
//     type: "simple",
//     content: "password reset",
//   },
//   {
//     type: "intermediate",
//     content: "Software Installation",
//   },
//   {
//     type: "advanced",
//     content: "server outage",
//   },
//   {
//     type: "unknown",
//     content: "unknown request",
//   },
// ];

// requests.forEach((request) => {
//   const response = basicSupport.handleRequest(request);
//   console.log(response);
// });

// for doucment

// Abstract Handler
class DocumentHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(document) {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(document);
    }
    return `Validation failed for document type: ${
      document.type || "undefined"
    }`;
  }
}

// Concrete Handlers
class BasicValidationHandler extends DocumentHandler {
  handleRequest(document) {
    if (document.isValid()) {
      console.log(
        `Basic handler validation: ${document.name} passed basic validation.`
      );
      return super.handleRequest(document);
    } else {
      console.log(
        `Basic handler validation: ${document.name} failed basic validation.`
      );
      return `Basic handler validation: ${document.name} failed basic validation.`;
    }
  }
}

class IndepthAnalysisHandler extends DocumentHandler {
  handleRequest(document) {
    if (document.needsAnalysis()) {
      console.log(`In-depth handler: ${document.name} is being analyzed.`);
      document.analyze();
    } else {
      console.log(
        `In-depth handler: ${document.name} does not need in-depth analysis.`
      );
    }
    return super.handleRequest(document);
  }
}

class ApprovalHandler extends DocumentHandler {
  handleRequest(document) {
    if (document.isApproved()) {
      return `Approval handler: ${document.name} has already been approved.`;
    } else {
      console.log(`Approval handler: ${document.name} is pending approval.`);
      document.approve();
      return `Approval handler: ${document.name} has been approved.`;
    }
  }
}

// Document class to simulate different types of documents
class Document {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.valid = true;
    this.analyzed = false;
    this.approved = false;
  }

  isValid() {
    return this.valid;
  }

  needsAnalysis() {
    // Simulate analysis requirement based on document type
    return this.type === "text"; // Only 'text' documents need analysis
  }

  analyze() {
    this.analyzed = true;
  }

  isApproved() {
    return this.approved;
  }

  approve() {
    this.approved = true;
  }
}

// Client Code
const basicValidationHandler = new BasicValidationHandler();
const indepthAnalysisHandler = new IndepthAnalysisHandler();
const approvalHandler = new ApprovalHandler();

basicValidationHandler.setNext(indepthAnalysisHandler).setNext(approvalHandler);

const documents = [
  new Document("Document1", "text"),
  new Document("Document2", "spreadsheet"),
  new Document("Document3", "presentation"),
  new Document("Document4", "unknown"),
];

documents.forEach((doc) => {
  const response = basicValidationHandler.handleRequest(doc);
  console.log(response);
});
