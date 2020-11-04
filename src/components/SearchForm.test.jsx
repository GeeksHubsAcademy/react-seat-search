import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('Search form unit test', () => {
  test('it should render without crashing', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  });


  test('should have required inputs', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('input[name="price_from"]')).toHaveLength(1);
    expect(wrapper.find('input[name="price_to"]')).toHaveLength(1);
    expect(wrapper.find('input[name="guest_from"]')).toHaveLength(1);
    expect(wrapper.find('input[name="type"]')).toHaveLength(1);
    expect(wrapper.find('input[name="date_from"]')).toHaveLength(1);
    expect(wrapper.find('input[name="date_to"]')).toHaveLength(1);

  });
  test('should run onChange with the new state', () => {
    const updateFilter = jest.fn();

    const wrapper = shallow(<SearchForm onChangeFilter={updateFilter}/>);

    wrapper.find('input[name="price_from"]').simulate('change', {target:{value: '100'}});

    expect(updateFilter).toHaveBeenCalledWith({
        price_from: '100',
        price_to: '',
        type: '',
        guest_from: '',
        date_from:'',
        date_to:  '',
      })


  });
});
