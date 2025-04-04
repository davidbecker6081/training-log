import Papa from 'papaparse';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const parseCsv = (_a) => __awaiter(void 0, [_a], void 0, function* ({ csvFile, callbackFn }) {
    let parsedFile;
    const onError = (error) => {
        console.error('Error parsing CSV file:', error);
    };
    const onComplete = (parsedResults) => {
        callbackFn(parsedResults.data);
    };
    yield Papa.parse(csvFile, {
        complete: onComplete,
        error: onError,
        header: true,
        skipEmptyLines: true,
    });
});
export { parseCsv };
