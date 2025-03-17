import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchSetAndTrainData,
  fetchPredict,
} from '../../../store/actions/utils';

const LoadFileComponent = ({ isVisible, onClose, onAct }) => {
  const dispatch = useDispatch();
  const [file, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const fileToData = async (file) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    switch (fileExtension) {
      case 'json':
        return file.text().then(JSON.parse);
      case 'csv':
        return file.text().then((text) => {
          const [headers, ...rows] = text
            .split('\n')
            .map((row) => row.split(','));
          return rows.map((row) =>
            Object.fromEntries(row.map((cell, index) => [headers[index], cell]))
          );
        });
      case 'txt':
        return file.text().then((text) => {
          return text.split('\n').map((line) => ({ line }));
        });
      default:
        return { error: 'File not acceptable format: json, txt, csv' };
    }
  };
  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }
    const data = await fileToData(file);
    if (data.error) {
      alert(data.error);
      return;
    }
    if (onAct === 'train') {
      dispatch(fetchSetAndTrainData(data));
    } else if (onAct === 'predict') {
      dispatch(fetchPredict(data));
    }
    onClose();
  };
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-1/2'>
        <h2 className='text-2xl font-bold mb-4'>Load File</h2>
        <input type='file' className='mb-4' onChange={handleFileChange} />
        <div className='flex justify-end'>
          <button
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2'
            onClick={onClose}
          >
            Close
          </button>
          <button
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoadFileComponent;
