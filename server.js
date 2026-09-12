app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HOME ROUTE
app.get('/', async (req, res) => {
    try {
        const students = await Student.find();

        res.render('apphome', { students });
    } catch (error) {
        res.status(500).send('Error fetching students');
    }
});