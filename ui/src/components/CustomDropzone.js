import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { parseCsv } from '../services/csv-parser';
import { TfiImport } from "react-icons/tfi";

const CustomDropzone = () => {
    const [csvData, setCsvData] = useState(null)


    const onDropCallback = (parsedCsv) => {
      setCsvData(parsedCsv);
    }

    const onDrop = useCallback(async (acceptedFiles) => {
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
            <TfiImport className="mar-l" />
          </p>
        </div>
      )
}

export {
    CustomDropzone
}