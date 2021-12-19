import React from "react";
import {create} from 'react-test-renderer';
import Paginator from "./Paginator";

describe("Paginator component", () => {
    test("pages count", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        const spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    test("next button", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>);
        const root = component.root;
        const buttons = root.findAllByType("button");
        expect(buttons.length).toBe(1);
    });
})