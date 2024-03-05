import {render, screen } from '@testing-library/react';
import Async from './Async';
describe('Async Component', () => {
    test('renders post if request succeeds',async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'pa', title: 'First post'}],
        });
        render(<Async />);

        const lst = await screen.findAllByRole('listitem');
        expect(lst).not.toHaveLength(0);
    })

});