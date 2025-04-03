import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles/main.sass';
import axios from './api/axios';
import { useEffect, useState } from 'react';
import { CustomDropzone } from './components/CustomDropzone/CustomDropzone';
import { Button } from 'react-bulma-components';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetch workouts (typed return value)
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get('users/1/workouts');
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
});
function App() {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getWorkouts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                const data = yield getData();
                if (data) {
                    setWorkouts(data);
                }
            }
            catch (err) {
                setError(err); // Type assertion since err is unknown
            }
            finally {
                setLoading(false);
            }
        });
        getWorkouts();
    }, []);
    return (_jsxs("div", { className: "is-flex is-flex-direction-column is-align-items-center", children: [loading && _jsx("p", { children: "Loading..." }), error && _jsxs("p", { children: ["Error loading data: ", error.message] }), _jsx(Button, { color: "primary", className: "mar-y-xl", children: _jsx(CustomDropzone, {}) }), workouts.length > 0 ? (_jsx("div", { className: "dist-y-xl", children: workouts.map((workout) => (_jsxs("div", { children: [_jsx("h2", { className: "has-text-primary is-size-4", children: workout.name }), _jsx("p", { children: workout.description }), _jsxs("p", { children: ["Date: ", new Date(workout.date).toLocaleDateString()] })] }, workout.id))) })) : (!loading && _jsx("p", { children: "No workouts found." }))] }));
}
export default App;
