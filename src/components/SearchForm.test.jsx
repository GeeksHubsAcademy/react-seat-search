import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('Search form unit test', () => {
  test('it should render without crashing', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
