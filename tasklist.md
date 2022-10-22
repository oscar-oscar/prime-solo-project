### High Level order
- [] database SQL
- [] Dashboard view (GET)
- [] Match Details view without edit for base (GET, DELETE)
- [] Add Game/Match (singles) (POST, PUT, DELETE)
- [] Base styling


### database sql
- [x] create `game` table and insert sample data ( at least 2 games )
- [x] create `match` table (enter sample data)

## Base 
### Login/Registration
- [] organize view
- [] style header (test idea here)

### Dashboard view
- [x] create component
- [x] setup Route in App.js `/dashboard` = dashboard (home)
- [x] nav to dashboard (may change or remove later)
- [x] server side GET route 
    - [x] add route : app.use('/dashboard', dashRouter);
    - [x] create router: dashboard.router.js router.get('/')
- [x] client side axios GET
   - [x] display sample data on DOM 
- [x] create reducers & saga
- [x] basic styling & layout (rembmer win needs to render green and a loss is red)

### Game Details View 
- [x] create component
- [x] setup Route in App.jsx (`/details`)
- [x] server side GET route
    - [x] add route : app.use('/details', detailsRouter);
    - [x] create router : details.router.js router.get('/details')
- [x] client side axios GET 
    - [x] setup saga 
    - [x] useSelector to pull out game data
    - [x] dispath FETCH_GAME_DETAILS
    - [x] display on DOM 
    - [] DELETE Game in Details view
    - [] DELETE Note in Details view
    - [] basic styling & layout (a view for a win and view for a loss)

### Log Game View
- [] create component
- [] Log Game Form
    - [] create inputs  (score date, location, partner, opponent(s))
    - [] text field for game notes
- [] client side POST 
    - [] setup saga 
    - [] history.push to `/success`
- [] server side POST
    - [] create route : `app.use('/lognewgame', newGameRouter)`; 
    - [] create router `newGame.router.js`
- [] EDIT functionality...


    

## Stretch
- [] - ability to Edit game notes and form
- [] - log multiple games to equal a match (best 2 of 3)  
- [] - additonal styling (MUI)
- [] - searchable users that can be added/invited to play

    