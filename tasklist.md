### High Level order
- [] database SQL
- [] Dashboard view (GET)
- [] Match Details view without edit for base (GET, DELETE)
- [] Add Game/Match (singles) (POST, PUT, DELETE)
- [] Base styling

### database sql
- [] create `game` table and insert sample data ( 2 games )
- [] create `match` table (leave empty for now)

## Base 
### Login/Registration
- [] organize view
- [] style header (test idea here)

### Dashboard view
- [] create component
- [] setup Route in App.js `/` = dashboard (home)
- [] server side GET route 
    - [] add route : app.use('/dashboard', dashRouter);
    - [] create router: dashboard.router.js router.get('/')
- [] client side axios GET
   - [] display sample data on DOM 
   - [] basic styling & layout (rembmer win needs to render green and a loss is red)
   - [] create reducers & saga

### Game Details View
- [] create component
- [] setup Route in App.jsx (`/details`)
- [] server side GET route
    - [] add route : app.use('/details', detailsRouter);
    - [] create router : details.router.js router.get('/details')
- [] client side axios GET 
    - [] display on DOM 
    - [] basic styling & layout (a view for a win and view for a loss)
    - [] setup saga & reducers 

## Stretch
- [] - in DETAILS VIEW: Delete a match
- [] - ability to Edit game notes and form
- [] - log multiple games to equal a match (best 2 of 3)  
- [] - additonal styling (MUI)
- [] - searchable users that can be added/invited to play

    