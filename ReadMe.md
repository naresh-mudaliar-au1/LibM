**Note: If import for API collection does not work please try using insomnia http client application!**

**Installation**
1) npm install
2) copy env-example and create .env file
3) npm run start:dev

1. **Created Book Management API**
2. **User Auth based Book Create and Update API for limiting usage**
3. **List of API's With Payload**

_=> versioning: /api/v1/_

**User Routes**

**user/login :**
Method:POST

```json
{
  "username": "naresh1234567",
  "password": "naresh@gmail"
}
```

**user/signup :**
Method:POST

```json
{
  "username": "naresh1234567",
  "password": "naresh@gmail"
}
```

**-----------------------------------------------------------**
**Book Routes**

**book/create :**
Method:POST

```json
{
  "title": "n13",
  "author": "author",
  "summary": "Book summary!!"
}
```

**book/:id/update :**
Method:PUT

```json
{
  "title": "n13",
  "author": "author",
  "summary": "Book summary!!"
}
```

**book/:id :**
Method:GET


**book/ :**
Method:GET
Query Params:
search: t
page: 1
limit: 10


**book/:id :**
Method:DELETE

**Feature List**
1) User Module
To Manage Book Module actions
2) Book Module
CRUD: Operations
3) Validations added where required! 😅