import Papa from 'papaparse';

const parseCsv = async ({ csvFile, callbackFn }: { csvFile: File; callbackFn: (data: any[]) => void }) => {
    let parsedFile;

    type ParsedResults = {
        data: {
            [key: string]: any
        }[]
    }

    const onError = (error: Error) => {
        console.error('Error parsing CSV file:', error);
    }
    
    const onComplete = (parsedResults: ParsedResults) => {
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