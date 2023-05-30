import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PriceTemplateItemReadDto,  } from '../types';
import { updateEntry, selectSelectedEntry } from '../store/entriesSlice';
import './EntryEdit.css'

const EntryEditView: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedEntry = useSelector(selectSelectedEntry);
    const [type, setType] = useState('');
    const [group, setGroup] = useState('');
    const [rate, setRate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (selectedEntry) {
            setType(selectedEntry.type);
            setGroup(selectedEntry.group);
            setRate(selectedEntry.rate.toString());
            setDescription(selectedEntry.description);
        }
    }, [selectedEntry]);

    if (!selectedEntry) {
        return <div>Entry not found</div>;
    }

    const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const updatedEntry: PriceTemplateItemReadDto = {
            ...selectedEntry,
            type,
            group,
            rate: parseFloat(rate),
            description,
        };

        dispatch(updateEntry(updatedEntry));

        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="entry-edit">
            <h2>Edit Entry</h2>
            <form className="edit-form">
                <div className="form-group">
                    <label htmlFor="type" className="form-label">
                        Type:
                    </label>
                    <input
                        type="text"
                        id="type"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="group" className="form-label">
                        Group:
                    </label>
                    <input
                        type="text"
                        id="group"
                        className="form-control"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rate" className="form-label">
                        Rate:
                    </label>
                    <input
                        type="text"
                        id="rate"
                        className="form-control"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary" onClick={handleSave}>
                        Save
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EntryEditView;
