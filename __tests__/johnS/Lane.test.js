import Lane from "../../src/components/GameController/Lane";
import "@testing-library/jest-dom";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

it("Lane changes successfully", () =>
{
    const mockCallBack = jest.fn();
    //Test that the button calls the mock function
    let testlane = shallow(Lane({onClick:mockCallBack, laneTitle: "1"}));
    testlane.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
});