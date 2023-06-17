import { render } from '@testing-library/react';
import WebCommonUi from './web-common-ui';
describe('WebCommonUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebCommonUi />);
    expect(baseElement).toBeTruthy();
  });
});
