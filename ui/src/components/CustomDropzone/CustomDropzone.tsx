import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { parseCsv } from '../../services/csv-parser';
import DynamicIcon from '../Icon/ReactIcon';
import type { ParsedCsv } from './CustomDropzone.types'
import { TfiUpload } from 'react-icons/tfi';

const CustomDropzone: React.FC = () => {
  const [csvData, setCsvData] = useState<ParsedCsv | null>(null);

  const onDropCallback = (parsedCsv: ParsedCsv) => {
    setCsvData(parsedCsv);
    console.log('Parsed CSV data:', parsedCsv);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      await parseCsv({ csvFile: acceptedFiles[0], callbackFn: onDropCallback });
    } catch (error) {
      console.error('Error parsing CSV file:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="is-flex is-align-items-center">
        Upload Peak Force
        {/* <DynamicIcon className="mar-l" icon="tfi/TfiUpload" /> */}
        <TfiUpload className="mar-l" />
      </p>
    </div>
  );
};

export {
  CustomDropzone
};
