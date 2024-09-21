import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const courses = [
    {
        id: 2,
        title: 'JS course',
        price: 1000,
    },
    {
        id: 2,
        title: 'React course',
        price: 800
    }
];

// CRUD (Create / Read / Update / Delete)

// Get all courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Get single course
app.get('/api/courses/:courseId', (req, res) => {
    const courseId = +req.params.courseId;
    const course = courses.find((course) => course.id === courseId);
    if (!course) {
        return res.status(404).json({ msg: "Course not found" });
    }
    res.json(course);
});

// Add a new course
app.post('/api/courses', [
    body('title').notEmpty().isLength({ min: 2 }).withMessage('Title must be at least 2 characters long'),
    body('price').isNumeric().withMessage('Price must be a number')
], (req, res) => {
    const errors = validationResult(req);
if (errors.isEmpty()){
    return res.status(400).json(errors.array())
}


    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.json(newCourse);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});
