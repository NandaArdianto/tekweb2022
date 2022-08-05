
# User

## Menampilkan data user


GET: /user

response:
[
    {
        "id"            : "",
        "name"          : "",
        "me"            : "",
    },
    ...
]


## Menampilkan data user dengan "id" tertentu


GET: /user/[id]

reponse:
{
        "id"            : "",
        "name"          : "",
        "me"            : "",
}


# Menambahkan data user


POST: /user

data:
{
        "id"            : "",
        "name"          : "",
        "me"            : "",
}

response:
true    // if success
false   // if failure


## Edit data user


PUT: /user

data:
{
        "id"            : "",
        "name"          : "",
        "me"            : "",
}

response:
true    // if success
false   // if failure



## Menghapus data user


DELETE: /user/[id]

response:
true    // if success
false   // if failure


## Artikel

## Menampilkan data semua artikel


GET: /article

response:
[
    {
        "id"            : "",
        "judul"         : "",
        "img_url"       : "",
        "author"        : "",
        "desc"          : "",
    }
    ....
]


## Menampilkan data artikel dengan id  tertentu


GET: /article/[id]

response:
{    
        "id"            : "",
        "judul"         : "",
        "img_url"       : "",
        "author"        : "",
        "desc"          : "",
}


## Menambahkan data artikel


POST: /artikel

data:
{
       
        "id"            : "",
        "judul"         : "",
        "img_url"       : "",
        "author"        : "",
        "desc"          : "",
}

response:
true    // if success
false   // if failure


## Mengedit data artikel


PUT: /article

data:
{
       
        "id"            : "",
        "judul"         : "",
        "img_url"       : "",
        "author"        : "",
        "desc"          : "",
}

response:
true    // if success
false   // if failure


## Menghapus data artikel


DELETE: /article/[id]

response:
true    // if success
false   // if failure
```