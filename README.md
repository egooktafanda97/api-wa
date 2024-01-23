#API WA GATEWAY

Gunakan node js versi >=16

### rename .env.example ke .env

### install

```
yarn install
yarn build
yarn start
```

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

```json
{
  "session": "98582",
  "to": "6282284733404",
  "text": "ego"
}
```

# Send BoadCast

### Endpoint

```
http://localhost:5040/api/send-broadcart
```

- **Metode**: POST

#### Body

```json
{
  "session": "98582",
  "data": [
    {
      "to": "6282284733404",
      "text": "ego"
    },
    {
      "to": "6282284733404",
      "text": "ego"
    },
    {
      "to": "6282284733404",
      "text": "ego"
    }
  ]
}
```

#

# Send File | Image | vidio | voice

### Endpoint

```

http://localhost:5040/api/send-file

```

- **Metode**: POST

#### Body FormData

```

files:(file uploaded)
session:"98582"
to: "628xxx"
text: "pesan"

```

#

# Send File Broadcast | Image | vidio | voice

### Endpoint

```

http://localhost:5040/api/send-file-broadcast

```

- **Metode**: POST

#### Body FormData

```

files:(file uploaded)
session:"98582"
data:[
 {
      "to": "6282284733404",
      "text": "ego"
    },
    {
      "to": "6282284733404",
      "text": "ego"
    }
]

```
