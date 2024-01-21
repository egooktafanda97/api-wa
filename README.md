#API WA GATEWAY

Gunakan node js versi >=16

# Buat Session Baru

### Endpoint

```
http://localhost:5040/api/new-session?session=(nama session)&scan=true&user_id=(user id login)
```

- **Metode**: GET

#### Parameter

- `session` (String): ID unik data.
- `scan` (Boolean): bernilai true.
- `user_id` (Number): id dari user login

#

# Get Session

### Endpoint

```
http://localhost:5040/api/get-session/:id
```

- **Metode**: GET

#### Prefix

- `id` (Number): ini merupakan id dari user yang login / terdaftar.

#

# Destory Session

### Endpoint

```
http://localhost:5040/api/destory/:sessions
```

- **Metode**: GET

#### Prefix

- `sessions` (String): ini merupakan nama dari session.

#

# Send Message

### Endpoint

```
http://localhost:5040/api/send-text
```

- **Metode**: POST

#### Body

```
{
    "session":"98582",
    "to":"6282284733404",
    "text":"ego"
}
```

# Send BoadCast

### Endpoint

```
http://localhost:5040/api/send-broadcart
```

- **Metode**: POST

#### Body

```
{
    "session":"98582",
    "to":"6282284733404",
    "text":"ego"
}
```
