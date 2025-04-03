import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { parseCsv } from '../../services/csv-parser'
import DynamicIcon from '../Icon/ReactIcon'


const CustomDropzone = () => {
    const [csvData, setCsvData] = useState(null);


    const onDropCallback = (parsedCsv: any) => {
      setCsvData(parsedCsv);
      console.log('Parsed CSV data:', parsedCsv);
    }

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        try {
          await parseCsv({ csvFile: acceptedFiles[0], callbackFn: onDropCallback });
        }
        catch (error) {
          console.error('Error parsing CSV file:', error);
        }
    }, []);

    // useEffect(() => {
    //   onDrop()
    // }, [onDrop]);
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="is-flex is-align-items-center">
            Upload Peak Force
            <DynamicIcon className="mar-l" icon="TfiUpload" />
          </p>
        </div>
      )
}

export {
    CustomDropzone
}