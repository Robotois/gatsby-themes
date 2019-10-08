/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useContext } from 'react';
import {
  FilterContext,
  SET_QUERY,
} from '../context/FilterContext';

export default function SearchInput({ header, ...rest }) {
  const {
    dispatch,
    state: { query },
  } = useContext(FilterContext);
  return (
    <div
      sx={{
        width: '100%',
        px: header ? 0 : 3,
      }}>
      <input
        sx={{
          width: header ? [0, '100%'] : ['100%', 0],
          border: '1px solid',
          borderColor: 'primary',
          display: header ? ['none', 'block'] : ['block', 'none'],
          borderRadius: 5,
          height: 40,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 'heading',
          fontWeight: 'heading',
          px: 3,
          color: 'title',
          bg: 'background',
        }}
        type="text"
        placeholder="Buscar ..."
        {...rest}
        value={query}
        onChange={e => {
          const {
            target: { value },
          } = e;
          dispatch({ type: SET_QUERY, query: value });
        }}

      />
    </div>
  )
}