import { HistoryController } from "./HistoryController";

describe("HistoryController", () => {
  test("history size", () => {
    // GIVEN
    const historySize = 3;
    const historyController = new HistoryController(historySize);

    // WHEN
    historyController.push("1");
    historyController.push("2");
    historyController.push("3");
    historyController.push("4");
    historyController.push("5");

    // THEN
    expect(historyController.entries).toEqual(["3", "4", "5"]);
  });

  test("history.getPrevious() / getNext()", () => {
    // GIVEN
    const historySize = 3;
    const historyController = new HistoryController(historySize);

    // WHEN
    historyController.push("1");
    historyController.push("2");
    historyController.push("3");
    historyController.push("3");

    // THEN
    expect(historyController.getNext()).toEqual(undefined);
    expect(historyController.getPrevious()).toEqual("3");

    // WHEN
    historyController.push("3");
    historyController.push("3");

    // THEN
    expect(historyController.getPrevious()).toEqual("3");
    expect(historyController.getPrevious()).toEqual("2");
    expect(historyController.getPrevious()).toEqual("1");
    expect(historyController.getPrevious()).toEqual("1");
    expect(historyController.getNext()).toEqual("2");
    expect(historyController.getNext()).toEqual("3");
    expect(historyController.getNext()).toEqual(undefined);
  });
});
