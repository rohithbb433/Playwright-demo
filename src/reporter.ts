import {
  FullResult,
  Reporter,
  TestCase,
  TestResult,
  TestStep,
} from "@playwright/test/reporter";

export default class CustomReporter implements Reporter {
  onTestBegin(test: TestCase, result: TestResult): void {
    console.log("Test Started: " + test.title);
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    console.log("Test Ended: " + test.title);
    console.log("Result: " + result.status);
    if (result.error) {
      console.log("Stack - " + result.error.stack);
    }
  }

  onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
    if (step.category === "test.step") {
      console.log("Test step started: " + step.title);
    }
  }

  onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {
    if (step.category === "test.step") {
      console.log("Test step Ended: " + step.title);
    }
  }

  onEnd(result: FullResult): void | Promise<void> {
    console.log("On end: " + result.status);
  }

  onStdOut(chunk: string | Buffer, test?: TestCase, result?: TestResult): void {
    console.log(chunk);
  }

  onStdErr(
    chunk: string | Buffer,
    test: void | TestCase,
    result: void | TestResult
  ): void {
    console.log(chunk);
  }
}
