import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectEntries, selectSelectedEntry, selectEntry } from '../store/entriesSlice';
import { PriceTemplateItemReadDto } from '../types';
import './EntryList.css'

function EntryListView(){
    const dispatch = useDispatch();
    const entries  = useSelector(selectEntries);
    const selectedEntry = useSelector(selectSelectedEntry);

    const handleSelectEntry = (id: string) => {
        dispatch(selectEntry(id));
    };

    return (
        <div className="entry-list">
            <h2 className='list-title'>Entry List</h2>
            {entries.map((entry: PriceTemplateItemReadDto) => (
                <div key={entry.id} className='list-item'>
                    <div>{entry.id}) <Link className='item list' to={`/edit/${entry.id}`} onClick={() => handleSelectEntry(entry.id)}>
                        {entry.type}
                    </Link></div>
                    <div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EntryListView;
