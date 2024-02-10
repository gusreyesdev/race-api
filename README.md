# RaceApi

# Developments Steps

# Run Locally

1. npm install
2. npm run dev

# Url

localhost:4000

# Run By Cloud

# Url

https://3zcc1n41i0.execute-api.us-east-1.amazonaws.com

# ----- EndPoints -----

# Request a Ride

```
https://3zcc1n41i0.execute-api.us-east-1.amazonaws.com/api/rider/request-ride
```

```
Post
{
 "email": "rider1@gmail.com"
}

or

Post
{
 "email": "rider2@gmail.com"
}

```

# Finish a Ride

```
https://3zcc1n41i0.execute-api.us-east-1.amazonaws.com/api/driver/finish-ride
```

```
Post
{
 "email": "driver1@gmail.com",
 "latitude": 3.455379,
 "longitude": -76.534096,
 "minuteElapsed": 2,
 "reference": "sk8-das113-fsd1-fs1-1-xmxm392-sn2m"
}

or

Post
{
 "email": "driver2@gmail.com",
 "latitude": 3.455379,
 "longitude": -76.534096,
 "minuteElapsed": 2,
 "reference": "sk8-das113-fsd1-fs1-1-xmxm392-sn2m"
}
```
