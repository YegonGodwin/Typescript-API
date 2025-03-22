import express from 'express';
const app= express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello Kenya, You still learning Node.js and typescript');
    // res.send('You are doing great');
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})