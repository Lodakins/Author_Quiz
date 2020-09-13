import React from 'react';
// import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { iteratee } from 'underscore';

Enzyme.configure({adapter: new Adapter()});

describe("Author Quiz",()=>{
    it("should render without crashing",()=>{
        const div = document.createElement('event');
        ReactDOM.render(<AuthorQuiz />,div);
    })
})

test('renders learn react link', () => {
  const { getByText } = render(<AuthorQuiz />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
