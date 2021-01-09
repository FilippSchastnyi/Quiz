import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-8b061-default-rtdb.firebaseio.com/'
})