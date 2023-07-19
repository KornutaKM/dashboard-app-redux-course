import { useSelector, useDispatch } from 'react-redux'
import { JobPosition } from './JobPosition'
import {
  selectAllPositions,
  selectVisiblePOsitions,
} from '../store/positions/positions-selectors.js'

import { addFilter } from 'store/filters/filters-actions'
import { selectFilters } from 'store/filters/filters-selectors'

const JobList = () => {
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblePOsitions(state, currentFilters)
  )

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList }
