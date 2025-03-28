import Papa from 'papaparse';

const parseCsv = async ({ csvFile, callbackFn }) => {
    let parsedFile;

    const onError = (error) => {
        console.error('Error parsing CSV file:', error);
    }
    
    const onComplete = (parsedResults) => {
        callbackFn(parsedResults.data);
    }

    await Papa.parse(csvFile, {
        complete: onComplete,
        error: onError,
        header: true,
        skipEmptyLines: true,
    })
}

export {
    parseCsv
}