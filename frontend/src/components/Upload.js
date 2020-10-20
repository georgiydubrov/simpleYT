import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Default } from '../layout';

const initialState = {
  video: {},
  title: '',
};

export const Upload = () => {
  const [state, setState] = useState(initialState);

  const [error, setError] = useState();

  let history = useHistory();

  const handleChange = ({ target }) =>
    setState({
      ...state,
      [target.name]: target.files ? target.files[0] : target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(state).forEach(([key, value]) => {
      let data = [key, value];

      if (key === 'file') {
        data = [...data, value.name];
      }
      formData.append(...data);
    });

    try {
      debugger;
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/video`,
        formData
      );
      debugger;
      if (response.status === 200) {
        setState(initialState);
        history.push('/');
      } else setError(response.data.message);
    } catch (e) {
      setError(e);
    }
  };
  return (
    <Default>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}
        <div className="form-group mb-2">
          <div className="custom-file">
            <input
              className="custom-file-input"
              type="file"
              id="customFile"
              name="video"
              onChange={handleChange}
              accept="video/*"
              required
            />
            <label className="custom-file-label" htmlFor="customFile">
              {state.video.name || 'Choose file'}
            </label>
          </div>
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleChange}
            placeholder="Set title"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!state.video.name}
        >
          Submit
        </button>
      </form>
    </Default>
  );
};
