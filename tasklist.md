### High Level order
- [] database SQL
- [] Dashboard view (GET)
- [] Match Details view without edit for base (GET, DELETE)
- [] Add Game/Match (singles) (POST, PUT, DELETE)
- [] Base styling

### database sql
- [] create `game` table and insert sample data ( 2 games )
- [] create `match` table (leave empty for now)
### Login/Registration
- [] organize view
- [] style header (test idea here)
### Dashboard view
- [] create component
- [] setup Route `/` = dashboard aka home
- [] server side GET route 
    - [] add route to app.use('/dashboard', dashRouter);
    - [] create router: dashboard.router.js router.get('/')
- [] client side axios GET
- 