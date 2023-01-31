import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CalculatorModule from "../CalculatorModule.vue";

describe("Calculator Module", () => {
  it("+ operator", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const sumButton = wrapper.find("#sum");

    expect(viewResult.text()).toContain("0");
    await sumButton.trigger("click");
    expect(viewResult.text()).toContain("1");
  });

  it("c operator", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const sumButton = wrapper.find("#sum");
    const clearButton = wrapper.find("#clear");

    expect(viewResult.text()).toContain("0");
    await sumButton.trigger("click");
    await clearButton.trigger("click");
    expect(viewResult.text()).toContain("0");
  });

  it("- operator", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const subtractButton = wrapper.find("#subtract");

    expect(viewResult.text()).toContain("0");
    await subtractButton.trigger("click");
    expect(viewResult.text()).toContain("-1");
  });

  it("/ operator", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const divideButton = wrapper.find("#divide");
    const sumButton = wrapper.find("#sum");

    expect(viewResult.text()).toContain("0");
    await sumButton.trigger("click");
    await divideButton.trigger("click");
    expect(viewResult.text()).toContain("0.5");
  });

  it("* operator", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const multiplyButton = wrapper.find("#multiply");
    const sumButton = wrapper.find("#sum");

    expect(viewResult.text()).toContain("0");
    await sumButton.trigger("click");
    await multiplyButton.trigger("click");
    expect(viewResult.text()).toContain("2");
  });

  it("mathematical calculation", async () => {
    const wrapper = mount(CalculatorModule);
    const viewResult = wrapper.find("#result");
    const sumButton = wrapper.find("#sum");
    const subtractButton = wrapper.find("#subtract");
    const divideButton = wrapper.find("#divide");
    const multiplyButton = wrapper.find("#multiply");

    expect(viewResult.text()).toContain("0");
    await sumButton.trigger("click");
    await multiplyButton.trigger("click");
    await multiplyButton.trigger("click");
    await subtractButton.trigger("click");
    await divideButton.trigger("click");
    expect(viewResult.text()).toContain("1.5");
  });
});
