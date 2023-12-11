import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'components/redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
        placeholder=""
      ></input>
    </div>
  );
};
