import {render, screen} from "@testing-library/react";
import {Button} from "../Button";

test('render Button component', async () => {
  render(<Button text={'test'} />);

  expect(screen.getByRole('button')).toHaveTextContent('test');
});
