# Features

* University List 
* Save favorite university
* Login / Register User 
* Newsletter
* Encrypted password
* Infinite load on University List

How To
-----------------
Install module package and json server and make sure user.json is in root folder with 

    yarn install    
    yarn global add json-server
    
Copy `.env.example` to `.env` and update `REACT_APP_API_ROOT` and `REACT_APP_KEY` value 

## API  Endpoint

### Login and Register
    /search?name=Middle

### Favorites
    /favorites
    
### Newsletters
    /newsletters

# Additional Notes

* List is fetch from http://universities.hipolabs.com/search
* To apply favorite users need to be logged in.

